import * as vscode from 'vscode';
import { applyEvaluationsOnClb, decorator } from './evaluations.js';

export function activate(context: vscode.ExtensionContext) {
    vscode.window.onDidChangeActiveTextEditor(applyEvaluationsOnClb);
    vscode.window.onDidChangeTextEditorSelection(e => applyEvaluationsOnClb(e.textEditor));

	if (vscode.window.activeTextEditor) {
		applyEvaluationsOnClb(vscode.window.activeTextEditor);
	}

	context.subscriptions.push(decorator);
}