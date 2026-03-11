/*
Given an array of N integers. Find the first element that occurs at least K number of times. If the answer is not present in the array, return -1.

Input 1: N = 7, K = 2, A[] = {1, 7, 4, 3, 4, 8, 7}
Output 1: 4
Explanation 1: Both 7 and 4 occur 2 times. But 4 is first that occurs 2 times As at index = 4, 4 has occurred at least 2 times whereas at index = 6, 7 has occurred at least 2 times.

Input 2: N = 7, K = 1, A[] = {1, 7, 4, 3, 4, 8, 7}
Output 2: 1
Constraints:
1 <= A.length <= 10000
1 <= K <= 100
1 <= A[i] <= 103
 */

function solve(arr, k) {

    let map = new Map();

    for (let a of arr) {
        map.set(a, (map.get(a) || 0) + 1);

        if (map.get(a) === k) return a;
    }
    return -1;
}

let arr = [1, 7, 4, 3, 4, 8, 7];
let k = 2;

console.log(solve(arr, k));

