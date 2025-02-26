import * as vscode from 'vscode';
import * as mathjs from 'mathjs';
import { formatResult } from './evaluations.js';

interface EvaluatedAppend {
    decoration: vscode.DecorationInstanceRenderOptions,
    resultText: string
}

const resultDecorator = vscode.window.createTextEditorDecorationType({
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

const titleDecorator = vscode.window.createTextEditorDecorationType({
	fontWeight: "700",
	textDecoration: "underline"
})

function applyEvaluationsOnClb(editor: vscode.TextEditor | undefined) {
	if (!editor || editor.document.languageId !== "calcbook")
	{
		return;
	}

	const evaluations = getEvaluations(editor.document);

	editor.setDecorations(resultDecorator, evaluations[0]);
	editor.setDecorations(titleDecorator, evaluations[1]);
}

function getEvaluations(document: vscode.TextDocument): [vscode.DecorationOptions[], vscode.DecorationOptions[]] {
	const scope = { };
	const resultDecorations: vscode.DecorationOptions[] = [];
	const titleDecorations: vscode.DecorationOptions[] = [];

	for (let i = 0; i < document.lineCount; i++) {
		const line = document.lineAt(i);

		if (line.isEmptyOrWhitespace) {
			continue;
		}

		if (line.text.startsWith("##")) {
			let start;

			if (line.text.length === 2) {
				start = 0;
			}
			else {
				start = [...line.text.slice(2)].findIndex(c => c !== ' ') + 2
			}

			if (start === -1 + 2) {
				start = 0;
			}

			titleDecorations.push({
				range: new vscode.Range(line.range.start.translate(0, start), line.range.end),
			})
			continue;
		}

		if (line.text.startsWith("#")) {
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

		resultDecorations.push(decoration);
	}

	return [resultDecorations, titleDecorations];
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

	context.subscriptions.push(resultDecorator);
}