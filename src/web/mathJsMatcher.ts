import * as math from 'mathjs';
import * as vscode from 'vscode';

/**
 * An interface for mapping a Math.js node to its VS Code Range.
 */
export interface NodeRange {
  node: math.MathNode;
  range: vscode.Range;
}

/**
 * Builds a normalized version of the expression (i.e. without whitespace)
 * and returns a mapping from each normalized character index to the original index.
 *
 * @param expression The full expression string.
 * @returns An object containing the normalized string and the mapping array.
 */
function buildNormalizedMapping(expression: string): { normalized: string; mapping: number[] } {
  let normalized = '';
  const mapping: number[] = [];
  for (let i = 0; i < expression.length; i++) {
    const char = expression[i];
    if (!/\s/.test(char)) { // ignore whitespace characters
      normalized += char;
      mapping.push(i);
    }
  }
  return { normalized, mapping };
}

/**
 * Finds an occurrence of the substring `search` in `normalized` (starting at index `from`)
 * ensuring that none of its positions have been used already.
 * Marks the found positions as used.
 *
 * @param normalized The normalized expression string.
 * @param search The substring to locate.
 * @param from The starting index for the search.
 * @param used A boolean array indicating which normalized positions have been used.
 * @returns The starting index of the found occurrence (in normalized coordinates) or -1 if not found.
 */
function findOccurrenceNormalized(
  normalized: string,
  search: string,
  from: number,
  used: boolean[]
): number {
  let pos = normalized.indexOf(search, from);
  while (pos !== -1) {
    let conflict = false;
    for (let i = pos; i < pos + search.length; i++) {
      if (used[i]) {
        conflict = true;
        break;
      }
    }
    if (!conflict) {
      // Mark these positions as used.
      for (let i = pos; i < pos + search.length; i++) {
        used[i] = true;
      }
      return pos;
    }
    pos = normalized.indexOf(search, pos + 1);
  }
  return -1;
}

/**
 * Extracts Math.js nodes along with their VS Code ranges (positions) in the expression.
 *
 * @param expression The mathematical expression as a string.
 * @param line (Optional) The line number in the VS Code document. Defaults to 0.
 * @returns An array of NodeRange objects.
 *
 * @remarks
 * This function first creates a normalized version of the expression and a mapping
 * to its original indices. It then parses the expression using Math.js and traverses its AST.
 * For each node, it looks for a match in the normalized expression (ignoring whitespace)
 * and then converts the normalized indices back to the original positions to build a VS Code range.
 */
export function extractNodeRanges(expression: string, line: number = 0): NodeRange[] {
  const ast = math.parse(expression);
  const nodeRanges: NodeRange[] = [];

  // Create a normalized version of the expression and mapping to original indices.
  const { normalized, mapping } = buildNormalizedMapping(expression);
  // Track which normalized indices have been mapped.
  const usedNormalized = new Array(normalized.length).fill(false);

  // Traverse the Math.js AST.
  ast.traverse((node, path, parent) => {
    // Get the node's string representation and remove any whitespace.
    const nodeStr = node.toString();
    const nodeNormalized = nodeStr.replace(/\s+/g, '');
    // Try to find an occurrence of the node in the normalized expression.
    const pos = findOccurrenceNormalized(normalized, nodeNormalized, 0, usedNormalized);
    if (pos >= 0) {
      // Convert normalized indices back to original indices.
      const startOriginal = mapping[pos];
      const endNormalized = pos + nodeNormalized.length - 1;
      const endOriginal = mapping[endNormalized] + 1; // end is exclusive
      const range = new vscode.Range(line, startOriginal, line, endOriginal);
      nodeRanges.push({ node, range });
    }
  });

  return nodeRanges;
}
