// https://leetcode.com/problems/sum-of-unique-elements/

function solve(arr) {
    let map = new Map();
    let sum = 0;

    for (let a of arr) {
        map.set(a, (map.get(a) || 0) + 1);
    }

    console.log(map)

    for (let [key, value] of map) {
        if (value === 1) sum += key;
    }

    return sum;
}

let arr = [1, 2, 3, 2];

console.log(solve(arr));

// O(n)