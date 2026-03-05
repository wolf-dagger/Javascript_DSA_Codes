// https://leetcode.com/problems/count-vowel-substrings-of-a-string/description/

'use strict'

function solve(s) {
    let arr = s.split('');

    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        let set = new Set();
        for (let j = i; j < arr.length; j++) {
            if (!isVowel(arr[j])) break;

            set.add(arr[j]);
            if (set.size === 5) count++;
        }
    }

    return count;
}

function isVowel(c) {
    return "aeiou".includes(c);
}

const word = "aeiouu";

console.log(solve(word));


// O(n^2)