import * as vscode from 'vscode';
import * as mathjs from 'mathjs';

class ExtraContext {
	comments: { [symbol: string]: string };
	expressions: { [symbol: string]: string };
	defintionLine: { [symbol: string]: number };

	constructor() {
		this.comments = { }
		this.expressions = { }
		this.defintionLine = { }
	}
}

function formatResult(result: any, scope: any): string {
	if (scope._qikDebug || scope._qikParse) {
		if (typeof result === 'function') {
			return result;
		}

		return JSON.stringify(result);
	}

	if (typeof result === 'function') {
		return "𝑓";
	}

	return result.toString();
}

function evaluateScopeUntilLine(document: vscode.TextDocument, scope: any, line: number, context?: ExtraContext): any {
	let result: any;
	scope._calcBookComment = { };
	scope._calcBookExpression = { };

	for (let i = 0; i <= line; i++) {
		const line = document.lineAt(i);

		if (line.isEmptyOrWhitespace || line.text.match(/^\s*#/m)) {
			continue;
		}

		const expression = mathjs.parse(line.text);

		result = expression.compile().evaluate(scope);

		if (expression instanceof mathjs.AssignmentNode && context) {
			const assignmentObject = expression.object;
			if (assignmentObject instanceof mathjs.SymbolNode) {
				const name = assignmentObject.name;

				context.expressions[name] = expression.toString().trim();
				context.defintionLine[name] = i;

				if (expression.comment && expression.comment.startsWith("#/")) {
					context.comments[name] = expression.comment.substring(2).trim();
				}
			}
		}
	}

	return result;
}

export { evaluateScopeUntilLine, formatResult, ExtraContext };