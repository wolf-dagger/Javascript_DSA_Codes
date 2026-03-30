/*

Given an array arr[] of N distinct integers, output the array in such a way that the first element is first maximum and the second element is the first minimum, and so on.

Input 1: N = 7, arr[] = {7, 1, 2, 3, 4, 5, 6}
Output 1: 7 1 6 2 5 3 4
Explanation 1: The first element is first maximum and second element is first minimum and so on.

Input 2: N = 8, arr[] = {1, 6, 9, 4, 3, 7, 8, 2}
Output 2: 9 1 8 2 7 3 6 4
Constraints:
1 <= A.length <= 105
1 <= A[i] <= 106
 */

function solve(arr) {
    let res = arr.sort((a, b) => a - b);

    let left = 0;
    let right = arr.length - 1;

    let resArray = [];
    let i = 0;

    while (left <= right) {
        resArray[i] = res[right];
        resArray[i + 1] = res[left];
        left++;
        right--;
        i += 2;
    }
    return resArray;
}

let arr = [7, 1, 2, 3, 4, 5, 6];

console.log(solve(arr));

//O(n log n)