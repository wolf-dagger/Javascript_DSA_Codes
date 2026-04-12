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

    let sum = 0;
    let maxLen = 0;

    map.set(0, -1);

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];

        if (map.has(sum)) {
            let len = i - map.get(sum);
            maxLen = Math.max(maxLen, len);
        } else {

            map.set(sum, i);
        }
    }
    return maxLen;
}

let arr = [15, -2, 2, -8, 1, 7, 10, 23];

console.log(solve(arr));

// O(n)
