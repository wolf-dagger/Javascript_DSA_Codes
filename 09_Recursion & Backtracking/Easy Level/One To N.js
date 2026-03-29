/*
Write a function using recursion which returns a list that stores 1 to N numbers.

Input 1: 5
Output 1: 1 2 3 4 5
Explanation 1: Sequence up to 5 will be 1, 2, 3, 4 and 5

Input 2: 2
Output 2: 1 2
Constraints:
1 <= N <= 103
 */

function solve(n) {
    if (n === 0) return [];

    let res = solve(n - 1);

    res.push(n);

    return res;
}

let n = 5;
console.log(solve(n));

// O(n)