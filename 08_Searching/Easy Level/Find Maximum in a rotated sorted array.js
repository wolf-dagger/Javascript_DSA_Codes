// Find max value in rotated sorted array


function solve(arr) {
    let l = 0;
    let r = arr.length - 1;

    while (l < r) {
        let mid = Math.floor(l + ((r - l) / 2));

        if (arr[mid] >= arr[l]) {
            l = mid;
        } else {
            r = mid - 1;
        }
    }
    return arr[l];
}

let arr = [30, 40, 50, 10, 20];
let arr2 = [30, 40, 50, 60, 10, 20];
console.log(solve(arr2));

// O(log n)