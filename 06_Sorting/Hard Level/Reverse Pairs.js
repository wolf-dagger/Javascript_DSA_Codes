// https://leetcode.com/problems/reverse-pairs/description/

function solve(arr) {
    return mergeSort(arr, 0, arr.length - 1);
}

function mergeSort(arr, start, end) {
    if (start >= end) return 0;

    let mid = Math.floor(start + (end - start) / 2);

    let count = 0;

    // 1) count in left half
    count += mergeSort(arr, start, mid);

    // 2) count in right half
    count += mergeSort(arr, mid + 1, end);

    // 3) count cross reverse pairs + merge
    count += merge(arr, start, mid, end);

    return count;
}

function merge(arr, start, mid, end) {
    let count = 0;

    // STEP 1: count reverse pairs
    let j = mid + 1;

    for (let i = start; i <= mid; i++) {
        while (j <= end && arr[i] > 2 * arr[j]) {
            j++;
        }
        count += j - (mid + 1);
    }

    // STEP 2: normal merge (same as merge sort)
    let temp = [];
    let i = start;
    j = mid + 1;

    while (i <= mid && j <= end) {
        if (arr[i] <= arr[j]) {
            temp.push(arr[i]);
            i++;
        } else {
            temp.push(arr[j]);
            j++;
        }
    }

    while (i <= mid) {
        temp.push(arr[i]);
        i++;
    }

    while (j <= end) {
        temp.push(arr[j]);
        j++;
    }

    // copy back
    for (let k = 0; k < temp.length; k++) {
        arr[start + k] = temp[k];
    }

    return count;
}

let arr = [1, 3, 2, 3, 1];

console.log(solve(arr));

// O(n log n)