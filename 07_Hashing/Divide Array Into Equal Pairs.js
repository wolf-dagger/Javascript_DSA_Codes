// https://leetcode.com/problems/divide-array-into-equal-pairs/

function solve(arr) {
    let set = new Set();

    for (let a of arr) {
        if (set.has(a)) {
            set.delete(a);
        } else {
            set.add(a);
        }
    }

    return set.size === 0;
}

let arr = [3, 2, 3, 2, 2, 2];
let arr2 = [1, 2, 3, 4, 5];

console.log(solve(arr));

// O(n)