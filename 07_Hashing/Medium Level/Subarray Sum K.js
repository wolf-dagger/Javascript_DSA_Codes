// https://leetcode.com/problems/subarray-sum-equals-k/

function solve(arr, target) {
    let map = new Map();
    let count = 0;
    let prefixSum = 0;

    map.set(0, 1);

    for (let i = 0; i < arr.length; i++) {
        prefixSum += arr[i];

        if (map.has(prefixSum - target)) {
            count += map.get(prefixSum - target);
        }
        map.set(prefixSum, (map.get(prefixSum) || 0) + 1);
    }

    return count;
}

let arr = [1, 2, 3];
let target = 3;

console.log(solve(arr, target));