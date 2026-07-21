// https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree/

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function solve(root) {

    let queue = [];
    let level = 0;
    let totalLevelSum = Number.MIN_SAFE_INTEGER;
    const hm = new Map();

    queue.push(root);

    while (queue.length > 0) {
        let len = queue.length;

        let sum = 0;
        for (let i = 0; i < len; i++) {
            let curr = queue.shift();
            sum += curr.val;
            if (curr.left !== null) queue.push(curr.left);
            if (curr.right !== null) queue.push(curr.right);
        }

        totalLevelSum = sum;
        level++;

        hm.set(level, totalLevelSum);
    }

    let finalLevel = null;
    let maxVal = Number.MIN_SAFE_INTEGER;
    for (let [k, v] of hm) {
        if (v > maxVal) {
            maxVal = v;
            finalLevel = k
        }
    }

    return finalLevel;
}

const root = new TreeNode(1);

root.left = new TreeNode(2);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

root.right = new TreeNode(3);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

console.log(solve(root));