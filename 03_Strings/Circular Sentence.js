// https://leetcode.com/problems/circular-sentence/description/

'use strict'

function solve(s) {

    if (s[0] !== s.at(-1)) return false;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === ' ') {
            if (s[i - 1] !== s[i + 1]) return false;
        }
    }
    return true;
}

let sentence = "leetcode exercises sound delightful";

console.log(solve(sentence));

// O(n)