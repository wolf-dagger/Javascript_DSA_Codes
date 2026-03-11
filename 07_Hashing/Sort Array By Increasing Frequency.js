// https://leetcode.com/problems/sort-array-by-increasing-frequency/description/

function solve(arr) {

    let map = new Map();

    for (let a of arr) {
        map.set(a, (map.get(a) || 0) + 1);
    }

    let res = [];

    arr.sort((a, b) => {
        let freqA = map.get(a);
        let freqB = map.get(b);

        if (freqA === freqB) return b - a;

        return freqA - freqB;
    })

    return arr;

}

let arr = [2, 3, 1, 3, 2];
console.log(solve(arr));

// O(n log n)