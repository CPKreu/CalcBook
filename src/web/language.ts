import * as vscode from 'vscode';
import { unitMap } from './misc/unitMap.js';
import UNIT_DETAILS from './misc/unitDetails.js';
import functionDetails from './misc/functionDetails.js';
import { evaluateScopeUntilLine, ExtraContext as ScopeContext } from './evaluations.js';

export function activate(context: vscode.ExtensionContext) {
    const builtInItems = getBuiltInItems();

    const completionItemProvider: vscode.CompletionItemProvider = {
        provideCompletionItems(document, position, token, context) {
            const scopeItems = getCompletionItemsAtLine(document, position.line - 1);

            return [...scopeItems, ...builtInItems];
        }
    };

    const hoverProvider: vscode.HoverProvider = {
        provideHover(document, position, token) {
            const scope = { } as any;
            const context = new ScopeContext();

            evaluateScopeUntilLine(document, scope, position.line - 1, context);

            const word = document.getText(document.getWordRangeAtPosition(position));

            if (scope[word]) {
                const comment = context.comments[word];
                const expression = context.expressions[word];

                return new vscode.Hover(new vscode.MarkdownString((comment ?? "") + "\n```\n" + expression + "\n```"));
            }
        }
    };

    const definitionProvider: vscode.DefinitionProvider = {
        provideDefinition(document, position, token) {
            const scope = { } as any;
            const context = new ScopeContext();

            evaluateScopeUntilLine(document, scope, position.line - 1, context);

            const word = document.getText(document.getWordRangeAtPosition(position));

            if (scope[word]) {
                const line = context.defintionLine[word];
                const range = document.lineAt(line).range;
                const wordRange = document.getWordRangeAtPosition(range.start);

                return { range: wordRange, uri: document.uri } as vscode.Definition;
            }
        },
    }

    const foldingRange: vscode.FoldingRangeProvider = {
        provideFoldingRanges(document, context, token) {
            const text = document.getText();

            const titles = text.matchAll(/^##/gm);
            const positions: number[] = [];

            for (const element of titles) {
                positions.push(element.index);
            }

            const ranges: vscode.FoldingRange[] = [];

            for (let i = 0; i < positions.length; i++) {
                const position = positions[i];
                
                const start = document.positionAt(position);
                let end: vscode.Position;
                
                if (i === positions.length - 1) {
                    end = document.positionAt(text.length);
                }
                else {
                    end = document.positionAt(positions[i + 1] - 1);
                }

                ranges.push(new vscode.FoldingRange(start.line, end.line, vscode.FoldingRangeKind.Region))
            }

            return ranges;
        },
    }

    vscode.languages.registerCompletionItemProvider("calcbook", completionItemProvider);
    vscode.languages.registerHoverProvider("calcbook", hoverProvider);
    vscode.languages.registerDefinitionProvider("calcbook", definitionProvider);
    vscode.languages.registerFoldingRangeProvider("calcbook", foldingRange);
}

function getCompletionItemsAtLine(document: vscode.TextDocument, line: number): vscode.CompletionItem[] {
    const items: vscode.CompletionItem[] = [];
    const scope = { } as any;
    const context = new ScopeContext();

    evaluateScopeUntilLine(document, scope, line, context);

    for (const element in scope) {
        if (element.startsWith("_calcBook")) continue;

        const item = new vscode.CompletionItem(element, vscode.CompletionItemKind.Variable);
        const comment = context.comments[element];
        const expression = context.expressions[element];

        item.documentation = new vscode.MarkdownString((comment ?? "") + "\n```\n" + expression + "\n```");

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

            let unitDetail = detail.purpose;

            if (detail.siEquivalent) {
                unitDetail += "\n```\n" + detail.siEquivalent + "\n```";
            }

            item.documentation = new vscode.MarkdownString(unitDetail);
        }

        items.push(item);
    }

    return items;
}