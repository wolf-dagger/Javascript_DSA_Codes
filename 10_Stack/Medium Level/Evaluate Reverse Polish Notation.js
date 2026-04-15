// https://leetcode.com/problems/evaluate-reverse-polish-notation/description/

function solve(arr) {
    let stk = [];
    let operator = '+-*/';

    for (let a of arr) {
        if (operator.includes(a)) {
            let d2 = stk.pop()
            let d1 = stk.pop();
            let res = 0;

            if (a === "+") res = d1 + d2;
            else if (a === "-") res = d1 - d2;
            else if (a === "*") res = d1 * d2;
            else if (a === "/") res = Math.trunc(d1 / d2);

            stk.push(res);
        } else {
            stk.push(Number(a));
        }
    }
    return stk[0];
}

let arr = ["2", "1", "+", "3", "*"];
console.log(solve(arr));

// Time Complexity — O(n)