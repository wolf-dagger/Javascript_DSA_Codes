'use strict'

let n = 6;
let arr = [9, 5, 4, 2, 6, 1];

for (let round = 1; round < n; round++) {
    let isSwaped = false;
    for (let i = 0; i < n - round; i++) {
        if (arr[i] > arr[i + 1]) {

            [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
            isSwaped = true;
        }
    }
    if (!isSwaped) break;
}

let res = [];
for (let a of arr) res.push(a);

console.log(res);

//O (n square)