// Find element in a sorted array

function solve(arr, target) {
    let n = arr.length;
    let l = 0;
    let r = n - 1;

    while (l <= r) {
        let mid = Math.floor((l + r) / 2);

        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }
    return -1;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let target = 5;
console.log(solve(arr, target));

// O(log n)