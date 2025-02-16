import * as vscode from 'vscode';
import unitMap from './misc/unitMap.js';
import UNIT_DETAILS from './misc/unitDetails.js';
import functionDetails from './misc/functionDetails.js';

export function activate(context: vscode.ExtensionContext) {
    const builtInItems = getBuiltInItems();

    const completionItemProvider: vscode.CompletionItemProvider = {
        provideCompletionItems(document, position, token, context) {
            return builtInItems;
        }
    };

    vscode.languages.registerCompletionItemProvider("calcbook", completionItemProvider);
}

function getBuiltInItems() {
    var items: vscode.CompletionItem[] = [];

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