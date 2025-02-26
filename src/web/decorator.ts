import * as vscode from 'vscode';
import * as mathjs from 'mathjs';
import { formatResult } from './evaluations.js';

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

export function activate(context: vscode.ExtensionContext) {
    vscode.window.onDidChangeActiveTextEditor(applyEvaluationsOnClb);
    vscode.window.onDidChangeTextEditorSelection(e => applyEvaluationsOnClb(e.textEditor));

	if (vscode.window.activeTextEditor) {
		applyEvaluationsOnClb(vscode.window.activeTextEditor);
	}

	context.subscriptions.push(decorator);
}