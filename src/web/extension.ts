import * as vscode from 'vscode';
import * as language from './language.js';
import * as decorator from './decorator.js';

export function activate(context: vscode.ExtensionContext) {
    const copyCommand = vscode.commands.registerCommand('calcbook.copyToClipboard', (args) => {
		vscode.env.clipboard.writeText(args.toString());
    });

	language.activate(context);
	decorator.activate(context);

	context.subscriptions.push(copyCommand);
}

export function deactivate() {}