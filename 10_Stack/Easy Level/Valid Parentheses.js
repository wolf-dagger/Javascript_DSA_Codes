// https://leetcode.com/problems/valid-parentheses/description/

function solve(s) {
    let arr = [];
    let openBraces = ['(', '{', '['];
    let map = {')': '(', '}': '{', ']': '['};

    for (let ch of s) {
        if (openBraces.includes(ch)) {
            arr.push(ch);
        } else {
            if (arr.length === 0 || arr[arr.length - 1] !== map[ch]) {
                return false;
            }
            arr.pop();
        }
    }
    return arr.length === 0;
}

let s = "()";
console.log(solve(s));

// O(n)