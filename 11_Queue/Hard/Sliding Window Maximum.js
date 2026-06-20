// https://leetcode.com/problems/sliding-window-maximum/description/

function solve(nums, k) {
    const dequeue = [];
    const result = [];

    for (let i = 0; i < nums.length; i++) {

        while (dequeue.length && dequeue[0] <= i - k) {
            dequeue.shift();
        }

        while (dequeue.length && nums[dequeue[dequeue.length - 1]] < nums[i]) {
            dequeue.pop();
        }

        dequeue.push(i);

        if (i >= k - 1) result.push(nums[dequeue[0]]);
    }
    return result;
}

let nums = [1, 3, -1, -3, 5, 3, 6, 7];
let k = 3;

console.log(solve(nums, k));