// https://leetcode.com/problems/largest-rectangle-in-histogram/description/

function solve(heights) {
    const stack = [];
    let maxArea = 0;

    for (let i = 0; i <= heights.length; i++) {
        const currHeight = i === heights.length ? 0 : heights[i];

        while (stack.length && currHeight < heights[stack[stack.length - 1]]) {
            const h = heights[stack.pop()];
            const right = i;
            const left = stack.length ? stack[stack.length - 1] : -1;
            const width = right - left - 1;
            maxArea = Math.max(maxArea, h * width);
        }

        stack.push(i);
    }

    return maxArea;
}

let heights = [2, 1, 5, 6, 2, 3];
console.log(solve(heights));

// O(n)