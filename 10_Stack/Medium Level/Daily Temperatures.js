// https://leetcode.com/problems/daily-temperatures/description/

function solve(temperatures) {
    let stack = [];

    let n = temperatures.length;
    let result = new Array(n).fill(0);

    for (let i = n - 1; i >= 0; i--) {

        while (stack.length !== 0 && temperatures[i] >= temperatures[stack[stack.length - 1]]) {
            stack.pop();
        }

        if (stack.length !== 0) {
            result[i] = stack[stack.length - 1] - i;
        }

        stack.push(i);
    }

    return result;
}

let temperatures = [73, 74, 75, 71, 69, 72, 76, 73];
console.log(solve(arr));

// O(n)