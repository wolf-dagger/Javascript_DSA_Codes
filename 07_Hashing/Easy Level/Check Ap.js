/*

Given an array of N integers. Write a program to check whether an arithmetic progression can be formed using all the given elements.

Input 1: arr[] = { 0,12,4,8 }
Output 1: true
Explanation 1: Rearrange given array as {0, 4, 8, 12} which forms an arithmetic progression.

Input 2: arr[] = {12, 40, 11, 20}
Output 2: false
Constraints:
2 <= A.length <= 105
-105 <= A[i] <= 105

 */

function solve(arr) {
    let n = arr.length;
    let min = Math.min(...arr);
    let max = Math.max(...arr);

    if ((max - min) % (n - 1) !== 0) return false;

    let diff = (max - min) / (n - 1);

    let set = new Set(arr);

    for (let i = 0; i < n; i++) {
        let expected = min + i * diff;

        if (!set.has(expected)) return false;
    }
    return true;
}

let arr = [0, 12, 4, 8];
let arr2 = [12, 40, 11, 20];
console.log(solve(arr));
console.log(solve(arr2));

// O(n)