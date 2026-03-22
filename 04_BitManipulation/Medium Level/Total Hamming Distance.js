// https://leetcode.com/problems/total-hamming-distance/description/?q=Total+Hamming+Distance

function solve(arr) {
    let total = 0;
    let n = arr.length;

    for (let bit = 0; bit < 32; bit++) {
        let one = 0;

        for (let a of arr) {
            if ((a >> bit) & 1) {
                one++;
            }
        }
        let zero = n - one;
        total += one * zero;
    }
    return total;
}

let arr = [4, 14, 2];
console.log(solve(arr));

// Time: O(32 × n) = O(n)