/*

Expression Redundant Bracket

Given a string of balanced expressions, find if it contains a redundant parenthesis or not. A set of parenthesis is redundant if the same sub-expression is surrounded by unnecessary or multiple brackets. Return true if redundant, else false.

Input: str = “((a+b))”
Output: true
Explanation: ((a+b)) can reduced to (a+b), this Redundant

Input: str = “(a+(b)/c)”
Output: true

Constraints:
1 <= str.length <= 105

 */

function solve(str) {
    let stack = [];
    let operator = new Set(['+', '-', '*', '/']);

    for (let ch of str) {
        if (ch === ')') {
            let hasOperator = false;

            while (stack.length > 0 && stack[stack.length - 1] === '(') {
                let top = stack.pop();
                if (operator.has(top)) hasOperator = true;
            }
            stack.pop();

            if (!hasOperator) return true;
        } else {
            stack.push(ch);
        }
    }
    return false;
}

let str = "((a+b))";
console.log(solve(str));

