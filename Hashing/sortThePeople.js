"use strict";

let names = ["Mary", "John", "Emma"];
let heights = [180, 165, 170];

function tallest(names, heights) {
  let map = new Map();

  for (let i = 0; i < names.length; i++) {
    map.set(heights[i], names[i]);
  }

  let resArr = [];
  heights.sort((a, b) => b - a);

  for (let i = 0; i < heights.length; i++) {
    resArr.push(map.get(heights[i]));
  }

  return resArr;
}

console.log(tallest(names, heights));
console.log("hello");
