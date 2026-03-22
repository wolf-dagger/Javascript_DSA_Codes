// https://leetcode.com/problems/find-peak-element/description/

function solve(arr) {
    let l = 0;
    let r = arr.length - 1;

    while (l <= r) {
        let mid = Math.floor(l + ((r - l) / 2));

        if (mid > 0 && arr[mid] < arr[mid - 1]) {
            r = mid - 1;
        } else if (mid < arr.length - 1 && arr[mid] < arr[mid + 1]) {
            l = mid + 1;
        } else {
            return mid;
        }
    }
}

let arr = [1, 2, 1, 3, 5, 6, 4];
console.log(solve(arr));

// O(log n)