// Multiply a and b without using * operator

function solve(a, b) {

    if (b === 0) return 0;

    return solve(a, b - 1) + a;
}

let a = 6;
let b = 4;
console.log(solve(a, b));

// O(b)