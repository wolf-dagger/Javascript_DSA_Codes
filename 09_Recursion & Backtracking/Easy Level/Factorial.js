let n = 5;

function solve(n) {
    if (n === 0) return 1;

    return n * solve(n - 1);
}

console.log(solve(n));

// O(n)