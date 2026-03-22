// https://leetcode.com/problems/single-element-in-a-sorted-array/description/

function solve(arr) {
    let l = 0;
    let r = arr.length - 1;

    while (l < r) {
        let mid = Math.floor((l + ((r - l) / 2)))

        if (arr[mid] === arr[mid ^ 1]) {
            l = mid + 1;
        } else {
            r = mid;
        }
    }
    return arr[l];
}

let arr = [1, 1, 2, 3, 3, 4, 4, 8, 8];
let arr2 = [3, 3, 7, 7, 10, 11, 11];
console.log(solve(arr2));

// O(log n)