// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/

function solve(arr, target) {
    let first = firstPosition(arr, target);
    let last = lastPosition(arr, target);

    return [first, last];
}

function firstPosition(arr, target) {
    let l = 0;
    let r = n - 1;
    let ans = -1;

    while (l <= r) {
        let mid = Math.floor((l + r) / 2);

        if (arr[mid] === target) {
            ans = mid;
            r = mid - 1;
        } else if (arr[mid] < target) {
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }
    return ans;
}

function lastPosition(arr, target) {
    let l = 0;
    let r = n - 1;
    let ans = -1;

    while (l <= r) {
        let mid = Math.floor((l + r) / 2);

        if (arr[mid] === target) {
            ans = mid;
            l = mid + 1;
        } else if (arr[mid] < target) {
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }
    return ans;
}

let arr = [5, 7, 7, 8, 8, 10];
let target = 8;
console.log(solve(arr, target));

// O(log N)