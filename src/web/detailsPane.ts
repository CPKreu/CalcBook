import * as vscode from 'vscode';
import * as mathjs from 'mathjs';
import { evaluateScopeUntilLine, formatResult } from './evaluations.js';

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
    // TODO: Check sanitization requirements
    let texRepresentation: string = "";
    let treeSerialized: string = "";

    const scope: any = { };
    const finalResult = evaluateScopeUntilLine(document, scope, currentLine.lineNumber);

    const formattedResult = formatResult(finalResult, scope);

    try {
        const expression = mathjs.parse(currentLine.text);

        texRepresentation = expression.toTex();
        treeSerialized = JSON.stringify(expression, null, 2);
    }
    catch (e) {
        if (e) {
            texRepresentation = e.toString();
        }
    }

    currentPanel.webview.html = /*html*/`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body>
        <p>${currentLine.text}</p>
        <p>Results in</p>
        <p>${formattedResult}</p>

        <h1>TeX</h1>
        <div>
        <pre><code>${texRepresentation}</code></pre>
        </div>

        <h1>Debug</h1>

        <h2>Raw Result</h2>
        <pre><code>${JSON.stringify(finalResult, null, 2)}</code></pre>

        <h2>Tree</h2>
        <pre><code>${treeSerialized}</code></pre>

        <h2>Scope</h2>
        <pre><code>${JSON.stringify(scope, null, 2)}</code></pre>
    </body>
    </html>`;
}
