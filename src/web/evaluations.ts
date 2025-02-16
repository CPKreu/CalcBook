import * as vscode from 'vscode';
import * as mathjs from 'mathjs';

interface EvaluatedAppend {
    decoration: vscode.DecorationInstanceRenderOptions,
    resultText: string
}

const decorator = vscode.window.createTextEditorDecorationType({
    dark: {
        after: {
            color: "#42aaff"
        }
    },
    light: {
        before: {
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

		const hoverMessage = new vscode.MarkdownString(`${append.resultText} [Copy](command:calcbook.copyToClipboard?${encodeURIComponent(append.resultText)})`);

		hoverMessage.isTrusted = {
			enabledCommands: ["calcbook.copyToClipboard"]
		};

		const decoration: vscode.DecorationOptions = {
			range: line!.range,
			renderOptions: append.decoration,
			hoverMessage: hoverMessage
		};

		decorations.push(decoration);
	}

	return decorations;
}

function getAppend(text: string, scope: any): EvaluatedAppend {
	try {
        let result;

        if (scope._qikParse) {
            result = mathjs.parse(text, scope);
        }
        else {
            result = mathjs.evaluate(text, scope);
        }

        if (scope._qikDebug || scope._qikParse) {
            if (typeof result === 'function') {
				return result;
            }
    
			return simpleAppend(JSON.stringify(result));
        }

        if (typeof result === 'function') {
            return simpleAppend("𝑓");
        }

        return simpleAppend(result.toString());
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
				contentText: ` ⇒ ${text}`
			}
		},
		resultText: text
	};
}

function errorAppend(text: string): EvaluatedAppend {
	return {
		decoration: {
			after: {
				contentText: ` ⇏ ${text}`
			},
			dark: {
				after: {
					color: "#eb4034"
				}
			},
			light: {
				before: {
					color: "#000000"
				}
			},
		},
		resultText: text
	};
}

export { applyEvaluationsOnClb, getEvaluations, getAppend, decorator };
export type { EvaluatedAppend };