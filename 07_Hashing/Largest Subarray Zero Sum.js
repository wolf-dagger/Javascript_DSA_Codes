/*

Given an array arr[] of length N, find the length of the longest sub-array with a sum equal to 0.

Input: arr[] = {15, -2, 2, -8, 1, 7, 10, 23}
Output: 5
Explanation: The longest sub-array with elements summing up-to 0 is {-2, 2, -8, 1, 7}

Input: arr[] = {1, 2, 3}
Output: 0
Explanation: There is no subarray with 0 sum

Constraints:
1 <= N <= 105
-1000 <= A[i] <= 1000, for each valid i

 */

function solve(arr) {
    let map = new Map();
    let prefixSum = 0;
    let maxLen = 0;

    for (let i = 0; i < arr.length; i++) {
        prefixSum += arr[i];

        if (prefixSum === 0) {
            maxLen = i + 1;
        }

        if (map.has(prefixSum)) {
            let length = i - map.get(prefixSum);
            maxLen = Math.max(maxLen, length);
        } else {
            map.set(prefixSum, i);
        }
    }

    return maxLen;
}

let arr = [15, -2, 2, -8, 1, 7, 10, 23];

console.log(solve(arr));

// O(n)
