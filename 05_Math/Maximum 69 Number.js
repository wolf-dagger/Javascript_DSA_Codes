// https://leetcode.com/problems/maximum-69-number/description/

'use strict'

function solve(n) {
    return Number(n.toString().replace('6', '9'));
}

let n = 9669;
console.log(solve(n));

//O(d) = depends on digits