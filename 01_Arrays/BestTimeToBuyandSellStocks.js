"use strict"

let arr = [7, 1, 5, 3, 6, 4];


function fun(arr) {
    let minPrice = Number.MAX_VALUE;
    let maxProfit = 0;

    for (let i = 0; i < arr.length; i++) {
        minPrice = Math.min(minPrice, arr[i]);
        let profit = arr[i] - minPrice;
        maxProfit = Math.max(maxProfit, profit);
    }
    return maxProfit;
}

console.log(fun(arr));