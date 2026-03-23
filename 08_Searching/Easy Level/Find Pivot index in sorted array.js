// Find Pivot in sorted array

function solve(arr) {
    let l = 0;
    let r = arr.length - 1;

    while (l < r) {
        let mid = Math.floor((l + (r - l) / 2));

        if (arr[mid] > arr[r]) {
            l = mid + 1;
        } else {
            r = mid;
        }
    }
    return l;
}

let arr = [30, 40, 50, 10, 20];
console.log(solve(arr));

// O(log n)