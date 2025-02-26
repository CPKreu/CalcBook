import * as vscode from 'vscode';
import * as mathjs from 'mathjs';

interface EvaluatedAppend {
    decoration: vscode.DecorationInstanceRenderOptions,
    resultText: string
}

const decorator = vscode.window.createTextEditorDecorationType({
	after: {
		fontStyle: "italic"
	},
    dark: {
        after: {
            color: "#eeeeee"
        }
    },
    light: {
        after: {
            color: "#000000"
        }
    }
});

function applyEvaluationsOnClb(editor: vscode.TextEditor | undefined) {
	if (!editor || editor.document.languageId !== "calcbook")
	{
		return;
	}

	const evaluations = getEvaluations(editor.document);

	editor.setDecorations(decorator, evaluations);
}

function getEvaluations(document: vscode.TextDocument): vscode.DecorationOptions[] {
	const scope = { };
	const decorations: vscode.DecorationOptions[] = [];

	for (let i = 0; i < document.lineCount; i++) {
		const line = document.lineAt(i);

		if (line.isEmptyOrWhitespace || line.text.match(/^\s*#/m)) {
			continue;
		}

		const append = getAppend(line.text, scope);

		if (!append) {
			continue;
		}

		const hoverMessage = new vscode.MarkdownString(`${append.resultText} [Copy](command:calcbook.copyToClipboard?${encodeURIComponent(append.resultText)})`);

		hoverMessage.isTrusted = {
			enabledCommands: ["calcbook.copyToClipboard"]
		};

		const decoration: vscode.DecorationOptions = {
			range: new vscode.Range(line.range.end, line.range.end),
			renderOptions: append.decoration,
			hoverMessage: hoverMessage
		};

		decorations.push(decoration);
	}

	return decorations;
}

function evaluateScopeUntilLine(document: vscode.TextDocument, scope: any, line: number): any {
	let result: any;

	for (let i = 0; i <= line; i++) {
		const line = document.lineAt(i);

		if (line.isEmptyOrWhitespace || line.text.match(/^\s*#/m)) {
			continue;
		}

		const expression = mathjs.parse(line.text);

		result = expression.compile().evaluate(scope);

		if (expression instanceof mathjs.AssignmentNode) {
			const assignmentObject = expression.object;
			if (assignmentObject instanceof mathjs.SymbolNode) {
				if (expression.comment && expression.comment.startsWith("#/")) {
					scope._calcBookComment[assignmentObject.name] = expression.comment.substring(2);
					scope._calcBookExpression[assignmentObject.name] = expression.toString();
				}
			}
		}
	}

	return result;
}

function getAppend(text: string, scope: any): EvaluatedAppend | undefined {
	try {
        let result;
		const expression = mathjs.parse(text);

		result = expression.compile().evaluate(scope);

		const formattedResult = formatResult(result, scope);

		if (expression instanceof mathjs.AssignmentNode) {
			if (expression.value.toString() === formattedResult) {
				return undefined;
			}
		}

		return simpleAppend(formattedResult);
    } catch (error) {
		if (error instanceof Error) {
			return errorAppend(error.message);
		}
    
		return errorAppend(JSON.stringify(error));
    }
}

function formatResult(result: any, scope: any): string {
	if (scope._qikDebug || scope._qikParse) {
		if (typeof result === 'function') {
			return result;
		}

		return JSON.stringify(result);
	}

	if (typeof result === 'function') {
		return "𝑓";
	}

	return result.toString();
}

function simpleAppend(text: string): EvaluatedAppend {
	return {
		decoration: {
			after: {
				contentText: ` ${text}`
			}
		},
		resultText: text
	};
}

function errorAppend(text: string): EvaluatedAppend {
	return {
		decoration: {
			after: {
				contentText: ` ${text}`
			},
			dark: {
				after: {
					color: "#eb4034"
				}
			},
			light: {
				after: {
					color: "#a8443d"
				}
			},
		},
		resultText: text
	};
}

export { applyEvaluationsOnClb, getEvaluations, getAppend, evaluateScopeUntilLine, formatResult, decorator };
export type { EvaluatedAppend };