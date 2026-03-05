// https://leetcode.com/problems/sorting-the-sentence/description/

'use strict'

function solve(s) {
    let digit = s.match(/\d+/g)?.map(Number) || [];
    let sentence = s.replace(/\d+/g, "");
    let sentenceArr = sentence.split(" ");
    let res = [];

    for (let i = 0; i < sentenceArr.length; i++) {
        res[digit[i] - 1] = sentenceArr[i];
    }

    return res.join(' ');
}

let s = "is2 sentence4 This1 a3";

console.log(solve(s));

// O(n)