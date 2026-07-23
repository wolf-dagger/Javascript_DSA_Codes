// https://leetcode.com/problems/path-sum-ii/description/

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function solve(root, target) {
    let res = [];
    let ans = [];

    function dfs(root, remaining) {
        if (root === null) return null;

        ans.push(root.val);

        remaining -= root.val;

        if (root.left === null && root.right === null) {
            if (remaining === 0) {
                res.push([...ans]);
            }
        }

        dfs(root.left, remaining);
        dfs(root.right, remaining);

        ans.pop();
    }

    dfs(root, target);

    return res;
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