// https://leetcode.com/problems/count-of-smaller-numbers-after-self/description/

function solve(nums) {
    let n = nums.length;

    let result = new Array(n).fill(0);

    let arr = nums.map((val, idx) => ({
        val: val,
        idx: idx
    }));

    mergeSort(arr, 0, n - 1, result);

    return result;
}

function mergeSort(arr, start, end, result) {
    if (start >= end) return;

    let mid = Math.floor((start + end) / 2);

    mergeSort(arr, start, mid, result);
    mergeSort(arr, mid + 1, end, result);

    merge(arr, start, mid, end, result);
}

function merge(arr, start, mid, end, result) {
    let temp = [];

    let i = start;
    let j = mid + 1;

    let rightCount = 0;

    while (i <= mid && j <= end) {
        if (arr[j].val < arr[i].val) {
            temp.push(arr[j]);
            rightCount++;
            j++;
        } else {
            result[arr[i].idx] += rightCount;
            temp.push(arr[i]);
            i++;
        }
    }

    while (i <= mid) {
        result[arr[i].idx] += rightCount;
        temp.push(arr[i]);
        i++;
    }

    while (j <= end) {
        temp.push(arr[j]);
        j++;
    }

    for (let k = 0; k < temp.length; k++) {
        arr[start + k] = temp[k];
    }
}

let nums = [5, 2, 6, 1];
console.log(solve(nums));

// O(n log n)