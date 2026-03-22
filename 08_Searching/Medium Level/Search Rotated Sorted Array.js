// https://leetcode.com/problems/search-in-rotated-sorted-array/description/

function solve(arr, target) {
    let l = 0;
    let r = arr.length - 1;

    while (l <= r) {
        let mid = Math.floor((l + r) / 2);

        if (arr[mid] === target) {
            return mid;
        }

        // Left is sorted
        if (arr[l] <= arr[mid]) {
            if (arr[l] <= target && target <= arr[mid]) {
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        }

        //Right is sorted
        else {
            if (arr[mid] < target && target <= arr[r]) {
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }
    }
    return -1;
}

let arr = [4, 5, 6, 7, 0, 1, 2];
let arr2 = [4, 5, 6, 7, 0, 1, 2];
let target = 3;
console.log(solve(arr2, target));

// O(log n)