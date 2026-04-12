// https://leetcode.com/problems/number-of-good-pairs/description/

function solve(arr) {
    let map = new Map();
    let count = 0;

    for (let a of arr) {

        count += map.get(a) || 0;

        map.set(a, (map.get(a) || 0) + 1);
    }

    return count;
}

let arr = [1, 2, 3, 1, 1, 3];
console.log(solve(arr));

// O(n)