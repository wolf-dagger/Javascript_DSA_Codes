// https://leetcode.com/problems/reverse-string/description/

'use strict'

function solve(s) {

    let left = 0;
    let right = s.length - 1;

    while (left <= right) {
        [s[left], s[right]] = [s[right], s[left]]; // new way to swap elements in array
        left++;
        right--;
    }

    return s;
}

let word = ["h", "e", "l", "l", "o"];

console.log(solve(word));

// O(n)