// https://leetcode.com/problems/path-sum-iii/

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function solve(root, targetSum) {
    const map = new Map();
    map.set(0, 1);

    function dfs(node, currentSum) {
        if (node === null) return 0;

        currentSum += node.val;

        let count = map.get(currentSum - targetSum) || 0;

        map.set(currentSum, (map.get(currentSum) || 0) + 1);

        count += dfs(node.left, currentSum);
        count += dfs(node.right, currentSum);

        // Backtrack
        map.set(currentSum, map.get(currentSum) - 1);

        return count;
    }

    return dfs(root, 0);
}

// Create nodes
const root = new TreeNode(5);

root.left = new TreeNode(4);
root.right = new TreeNode(8);

root.left.left = new TreeNode(11);

root.left.left.left = new TreeNode(7);
root.left.left.right = new TreeNode(2);

root.right.left = new TreeNode(13);
root.right.right = new TreeNode(4);

root.right.right.left = new TreeNode(5);
root.right.right.right = new TreeNode(1);

// Target
const targetSum = 22;

console.log(solve(root, targetSum));