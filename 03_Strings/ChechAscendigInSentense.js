// https://leetcode.com/problems/check-if-numbers-are-ascending-in-a-sentence/description/

"use strict"

function solve(s) {

    const strArr = s.split(" ");

    let num = [];

    for (let i = 0; i < strArr.length; i++) {
        const n = Number(strArr[i]);

        if (!isNaN(n)) num.push(n);
    }

    let increasing = Number.MIN_VALUE;

    for (let a of num) {
        if (a <= increasing) return false;

        increasing = a;
    }

    return true;
}

let s = "1 box has 3 blue 4 red 6 green and 12 yellow marbles";

console.log(solve(s));

// O(n)