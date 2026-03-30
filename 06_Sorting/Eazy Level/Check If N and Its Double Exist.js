// https://leetcode.com/problems/check-if-n-and-its-double-exist/

function solve(arr) {
    arr.sort((a, b) => a - b);

    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            if (arr[i] * 2 === arr[j]) return true;
        }
    }
    return false;
}

// O(n log n)

// -------------------------------


// optimized approach not using sort
function solve2(arr) {
    let set = new Set();

    for (let num of arr) {

        if (set.has(num * 2) || (num % 2 === 0 && set.has(num / 2))) {
            return true;
        }

        set.add(num);
    }

    return false;
}

// O(n)

let arr = [10, 2, 5, 3];
console.log(solve(arr));

let arr = [10, 2, 5, 3];

console.log(solve(arr));