"use strict";

let arr = [18, 9, 9, 10, 45, 10, 10];

// function fun(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {

//       if (arr[i] === arr[j]) return arr[i];
//     }
//   }
//   return -1;
// }

// console.log(fun(arr));

function fun(arr) {
  let set = new Set();

  for (let a of arr) {
    if (set.has(a)) return a;
    set.add(a);
  }

  return -1;
}

console.log(fun(arr));
