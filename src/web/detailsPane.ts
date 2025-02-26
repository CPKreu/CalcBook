import * as vscode from 'vscode';
import * as mathjs from 'mathjs';
import { evaluateScopeUntilLine, formatResult } from './evaluations.js';
import { encode } from 'html-entities';

let currentPanel: vscode.WebviewPanel | undefined = undefined;

export function activate(context: vscode.ExtensionContext) {
    const copyCommand = vscode.commands.registerCommand('calcbook.showDetailsPane', (args) => {
        currentPanel = vscode.window.createWebviewPanel(
            "calcbook.detailsPane",
            "CalcBook: Details",
            vscode.ViewColumn.Beside
        )

        if (vscode.window.activeTextEditor) {
            updatePreviewPane(vscode.window.activeTextEditor);
        }    
    });

    vscode.window.onDidChangeActiveTextEditor(updatePreviewPane);
    vscode.window.onDidChangeTextEditorSelection(e => updatePreviewPane(e.textEditor));

    context.subscriptions.push(copyCommand);
}

function updatePreviewPane(editor: vscode.TextEditor | undefined) {
	if (!editor || !currentPanel || editor.document.languageId !== "calcbook")
	{
		return;
	}

    const document = editor.document;
    const currentLine = document.lineAt(editor.selection.start);

    let html = "";
    const scope: any = { };
    try {
        const finalResult = evaluateScopeUntilLine(document, scope, currentLine.lineNumber);
    
        const formattedResult = formatResult(finalResult, scope);
    
        const expression = mathjs.parse(currentLine.text);

        const texRepresentation = expression.toTex();
        const treeSerialized = JSON.stringify(expression, null, 2);

        html = /*html*/`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body>
            <pre><code>${encode(currentLine.text)}</code></pre>
            <p>Results in</p>
            <pre><code>${encode(formattedResult)}</code></pre>
    
            <h1>TeX</h1>
            <div>
            <pre><code>${encode(texRepresentation)}</code></pre>
            </div>
    
            <h1>Debug</h1>
    
            <h2>Raw Result</h2>
            <pre><code>${encode(JSON.stringify(finalResult, null, 2))}</code></pre>
    
            <h2>Tree</h2>
            <pre><code>${encode(treeSerialized)}</code></pre>
    
            <h2>Scope</h2>
            <pre><code>${encode(JSON.stringify(scope, null, 2))}</code></pre>
        </body>
        </html>`;
    }
    catch (e) {
        if (e) {
            html = /*html*/`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
            </head>
            <body>
                <p>Error</p>
                <p>${e.toString()}</p>
            </body>
            </html>`;
        }
    }

    currentPanel.webview.html = html;
}
