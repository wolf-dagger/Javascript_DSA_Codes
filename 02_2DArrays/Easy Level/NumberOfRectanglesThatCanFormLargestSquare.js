// LeetCodee : https://leetcode.com/problems/number-of-rectangles-that-can-form-the-largest-square/description/

let rectangles = [[5, 8], [3, 9], [5, 12], [16, 5]];

console.log(solve(rectangles));

function solve(rectangles) {
    let maxSide = 0;
    let count = 0;

    for (let i = 0; i < rectangles.length; i++) {
        let side = Math.min(rectangles[i][0], rectangles[i][1]);

        if (side > maxSide) {
            maxSide = side;
            count = 1;   // reset count
        } else if (side === maxSide) {
            count++;
        }
    }

    return count;
}


// O(n)