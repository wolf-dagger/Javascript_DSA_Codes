// https://leetcode.com/problems/k-diff-pairs-in-an-array/description/

function solve(arr, k) {
    if (k < 0) return 0;
    let count = 0;

    if (k === 0) {
        let map = new Map();

        for (let a of arr) {
            map.set(a, (map.get(a) || 0) + 1);
        }

        for (let freq of map.values()) {
            if (freq > 1) count++;
        }

    } else {
        let set = new Set(arr);

        for (let a of set) {
            if (set.has(a + k)) count++;
        }
    }
    return count;
}

let arr = [3, 1, 4, 1, 5];
let k = 2;
console.log(solve(arr, k));

// Time:  O(n)
// Space: O(n)