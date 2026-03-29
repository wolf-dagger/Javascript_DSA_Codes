// Return nth fibonacci number

function solve(n) {

    if (n === 0 || n === 1) return n;

    return solve(n - 1) + solve(n - 2);
}

let n = 8;
console.log(solve(n));

// O(2^n) -> very costly time complexity
// Space complexity -> O(n)