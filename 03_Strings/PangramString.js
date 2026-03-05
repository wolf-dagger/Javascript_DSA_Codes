// https://leetcode.com/problems/check-if-the-sentence-is-pangram/description/

'use strict'

function solve(sentence) {
    let s = sentence.toLowerCase().split("");

    if (sentence.length < 26) return false;

    let map = new Map();

    for (let char of s) {
        if (char !== ' ') {
            map.set(char, (map.get(char) || 0) + 1);
        }
    }

    return map.size === 26;
}

let sentence = "thequickbrownfoxjumpsoverthelazydog";

console.log(solve(sentence));