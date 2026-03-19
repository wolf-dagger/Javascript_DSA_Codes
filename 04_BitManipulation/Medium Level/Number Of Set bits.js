// Count number of set bits in a number

function solve(n) {
    let count = 0;

    while (n > 0) {
        if ((n & 1) === 1) {
            count++;
        }
        n = n >> 1;
    }
    return count;
}

let n = 5;
console.log(solve(n));

// O(32)
// O(n)