/*
Given two arrays A and B of equal size N, the task is to find if given arrays are equal or not. Two arrays are said to be equal if both of them contain same set of elements, arrangements (or permutation) of elements may be different though.
Note : If there are repetitions, then counts of repeated elements must also be same for two array to be equal.

Input 1: A[] = {1,2,5,4,0} , B[] = {2,4,5,0,1}
Output 1: true
Explanation 1: Both the array can be rearranged to {0,1,2,4,5}

Input 2: A[] = {1,2,5} , B[] = {2,4,15}
Output 2: false
Constraints:
1 <= A.length, B.length <= 105
1<= A[i], B[i] <= 106
 */

'use strict'

function solve(arr1, arr2) {

    sorting(arr1);
    sorting(arr2);

    return JSON.stringify(arr1) === JSON.stringify(arr2);
}

function sorting(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }
    }
}

let arr1 = [1, 2, 5, 4, 0];
let arr2 = [2, 4, 5, 0, 1];

console.log(solve(arr1, arr2));

// O(n log n)