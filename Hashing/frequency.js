"use strict";

let arr = [10, 3, 4, 5, 2, 2, 3, 5, 5, 5];

const frequency = (arr) => {
  let map = new Map();

  for (let i = 0; i < arr.length; i++) {
    map.set(arr[i], (map.get(arr[i]) || 0) + 1);
  }

  console.log(map);
  let max = 0;

  for (let a of map.values()) {
    if (a > max) max = a;
  }

  return max;
};

console.log(frequency(arr));
