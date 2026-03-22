// https://leetcode.com/problems/divide-two-integers/description/

function solve(dividend, divisor) {
    const INT_MAX = 2147483647;
    const INT_MIN = -2147483648;

    // Overflow case
    if (dividend === INT_MIN && divisor === -1) {
        return INT_MAX;
    }

    // Determine sign
    let negative = (dividend < 0) !== (divisor < 0);

    let dvd = Math.abs(dividend);
    let dvs = Math.abs(divisor);

    let result = 0;

    while (dvd >= dvs) {
        let temp = dvs;
        let multiple = 1;

        while (dvd >= (temp << 1)) {
            temp <<= 1;
            multiple <<= 1;
        }

        dvd -= temp;
        result += multiple;
    }

    return negative ? -result : result;
}

let dividend = 10;
let divisor = 3;

console.log(solve(dividend, divisor));

// O(log n)