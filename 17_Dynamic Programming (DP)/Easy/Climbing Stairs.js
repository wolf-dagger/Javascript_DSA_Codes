// https://leetcode.com/problems/climbing-stairs/description/

function solve(n) {
    if (n <= 1) return 1;

    let prev = 1;
    let prevP = 1;
    let curr = 0;

    for (let i = 2; i <= n; i++) {
        curr = prevP + prev;
        prevP = prev;
        prev = curr;
    }

    return curr;
}

let n = 3;
console.log(solve(n));

// O(n)

