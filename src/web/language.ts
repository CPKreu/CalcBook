import * as vscode from 'vscode';
import unitMap from './misc/unitMap.js';
import UNIT_DETAILS from './misc/unitDetails.js';
import functionDetails from './misc/functionDetails.js';
import { evaluateScopeUntilLine } from './evaluations.js';

export function activate(context: vscode.ExtensionContext) {
    const builtInItems = getBuiltInItems();

    const completionItemProvider: vscode.CompletionItemProvider = {
        provideCompletionItems(document, position, token, context) {
            const scopeItems = getCompletionItemsAtLine(document, position.line - 1);

            return [...scopeItems, ...builtInItems];
        }
    };

    vscode.languages.registerCompletionItemProvider("calcbook", completionItemProvider);
}

function getCompletionItemsAtLine(document: vscode.TextDocument, line: number): vscode.CompletionItem[] {
    const items: vscode.CompletionItem[] = [];
    const scope = { _calcBookComment: { } = { }, _calcBookExpression: { } = { } } as any;

    evaluateScopeUntilLine(document, scope, line);

    for (const element in scope) {
        if (element === "_calcBookComment" || element === "_calcBookExpression") continue;

        const item = new vscode.CompletionItem(element, vscode.CompletionItemKind.Variable);
        const comment = scope._calcBookComment[element];
        const expression = scope._calcBookExpression[element];

        item.documentation = new vscode.MarkdownString(comment + "\n```\n" + expression + "\n```");

        items.push(item);
    }

    return items;
}

function getBuiltInItems() {
    const items: vscode.CompletionItem[] = [];

    items.push(...functionDetails);

    for (const [key, value] of unitMap) {
        const detail = UNIT_DETAILS[value];

        const item = new vscode.CompletionItem(key, vscode.CompletionItemKind.Unit);

        if (detail) {
            item.detail = detail.displayName;
            item.documentation = new vscode.MarkdownString(detail.purpose + "\n```\n" + detail.siEquivalent + "\n```");
        }

        items.push(item);
    }

    return items;
}