// https://leetcode.com/problems/valid-palindrome/

'use strict'


function solve(s) {
    let str = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase().split('');
    console.log(str);

    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        if (str[left] !== str[right]) return false;
        left++;
        right--;
    }
    return true;
}

let s = "A man, a plan, a canal: Panama";
console.log(solve(s));

// O(n)