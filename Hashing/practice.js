"use strict";

let arr = [1, 2, 3];

// function fun(arr) {
//   let res = [];

//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (i === j) continue;

//       if (arr[i] === arr[j]) {
//         res.push(arr[i]);
//         break;
//       }
//     }
//   }
//   if (res.length > 0) return true;

//   return false;
// }

// console.log(fun(arr));

let set = new Set();

for (let a of arr) {
  if (set.has(a)) return true;
  set.add(a);
}
return false;
