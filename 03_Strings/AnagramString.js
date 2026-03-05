// https://leetcode.com/problems/valid-anagram/description/

"use strict";

let s = 'anagram';
let t = 'nagaram';

console.log(solve2(s, t))


// 1. Main approach
function solve(s, t) {

    if (s.length !== t.length) return false;

    let map = new Map();

    for (let char of s) {
        map[char] = (map[char] || 0) + 1;
    }

    for (let char of t) {
        if (!map[char]) return false;
        map[char]--;
    }

    return true;

}


//2:  Another approach a little faster

function solve2(s, t) {
    if (s.length !== t.length) return false;

    let a = [];
    let b = [];

    for (let i = 0; i < 26; i++) {
        a[i] = 0;
        b[i] = 0;
    }

    for (let i = 0; i < s.length; i++) {
        let idxa = s.charCodeAt(i) - 'a'.charCodeAt(0);
        let idxb = t.charCodeAt(i) - 'a'.charCodeAt(0);
        a[idxa]++;
        b[idxb]++;
    }
    for (let i = 0; i < 26; i++) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}

//both approach have time complexity of O(n)