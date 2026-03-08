// https://www.geeksforgeeks.org/problems/minimum-difference-pair5444/1

function solve(arr) {
    arr.sort((a, b) => a - b);

    let minDiff = Number.MAX_VALUE;

    let left = 0;
    let right = 1;

    while (right < arr.length) {
        let min = arr[right] - arr[left];
        if (min < minDiff) minDiff = min;
        left++;
        right++;
    }
    return minDiff;
}

let arr = [2, 4, 5, 9, 7];

console.log(solve(arr));

// O(n log n)