import * as vscode from 'vscode';
import * as mathjs from 'mathjs';
import * as language from './language.js';
import * as decorator from './decorator.js';
import * as detailsPane from './detailsPane.js';
import { currencies } from './misc/unitMap.js';

export function activate(context: vscode.ExtensionContext) {
    const copyCommand = vscode.commands.registerCommand('calcbook.copyToClipboard', (args) => {
		vscode.env.clipboard.writeText(args.toString());
    });

	language.activate(context);
	decorator.activate(context);
	detailsPane.activate(context);

	context.subscriptions.push(copyCommand);
}

export function deactivate() {}

mathjs.createUnit("currency", { aliases: currencies });
