// https://leetcode.com/problems/longest-consecutive-sequence/description/

function solve(arr) {
    let set = new Set(arr);
    let maxLength = 0;
    for (let a of set) {

        if (!set.has(a - 1)) {

            let curr = a;
            let length = 1;

            while (set.has(curr + 1)) {
                curr++;
                length++;
            }

            maxLength = Math.max(maxLength, length);
        }
    }
    return maxLength;
}

let arr = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];
console.log(solve(arr));

// O(n)