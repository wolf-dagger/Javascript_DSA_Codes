// https://leetcode.com/problems/difference-between-element-sum-and-digit-sum-of-an-array/description/

'use strict'

function solve(arr) {

    let elementSum = 0;
    let digitSum = 0;

    for (let num of arr) {

        elementSum += num;

        while (num > 0) {
            digitSum += num % 10;
            num = Math.floor(num / 10);
        }
    }

    return Math.abs(elementSum - digitSum);

}

let nums = [1, 15, 6, 3];

console.log(solve(nums));

//O(n * d)

// d = number of digits example : 15 -> 2 digits