// https://www.geeksforgeeks.org/problems/inversion-of-array-1587115620/1

function solve(arr) {
    return mergeSort(arr, 0, arr.length - 1);
}

function mergeSort(arr, start, end) {
    if (start >= end) return 0;

    let mid = Math.floor((start + end) / 2);

    let count = 0;

    count += mergeSort(arr, start, mid);
    count += mergeSort(arr, mid + 1, end);
    count += merge(arr, start, mid, end);

    return count;
}

function merge(arr, start, mid, end) {
    let temp = [];
    let i = start;
    let j = mid + 1;
    let inversions = 0;

    while (i <= mid && j <= end) {
        if (arr[i] <= arr[j]) {
            temp.push(arr[i]);
            i++;
        } else {
            temp.push(arr[j]);
            inversions += (mid - i + 1); // KEY LINE
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

    // copy back to original array
    for (let k = 0; k < temp.length; k++) {
        arr[start + k] = temp[k];
    }

    return inversions;
}

let arr = [2, 4, 1, 3, 5];
console.log(solve(arr));

// O(n log n)