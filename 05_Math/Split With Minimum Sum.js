// https://leetcode.com/problems/split-with-minimum-sum/description/

'use strict'

function solve(n) {

    let digits = n.toString().split('').sort();

    let num1 = '';
    let num2 = '';


    for (let i = 0; i < digits.length; i++) {
        if (i % 2 === 0) {
            num1 += digits[i];
        } else {
            num2 += digits[i];
        }
    }

    return Number(num1) + Number(num2);
}

let n = 4325;

console.log(solve(n));