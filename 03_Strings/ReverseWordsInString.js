// https://leetcode.com/problems/reverse-words-in-a-string/description/

"use strict";

let s = "the sky is blue";
let t = "a good   example";


function solve2(s) {
    return s.split(" ").filter(e => e ? true : false).reverse().join(" ");
}

console.log(solve2(t));

//O(n)