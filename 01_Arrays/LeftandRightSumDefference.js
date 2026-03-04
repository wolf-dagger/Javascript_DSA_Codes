"use strict"

let arr = [10, 4, 8, 3];

function fun(arr) {

    let totalSum = 0;

    for (let a of arr) {
        totalSum += a;
    }

    let leftSum = 0;
    let res = [];

    for (let i = 0; i < arr.length; i++) {

        totalSum -= arr[i];

        let diff = Math.abs(leftSum - totalSum);
        res.push(diff);

        leftSum += arr[i];
    }

    return res;

}

console.log(fun(arr));
