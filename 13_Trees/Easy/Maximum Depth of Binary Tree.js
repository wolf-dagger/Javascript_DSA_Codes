// https://leetcode.com/problems/maximum-depth-of-binary-tree/description/

class TreeNode {
    constructor(val) {
        this.val = val === undefined ? 0 : val;
        this.left = null;
        this.right = null;
    }
}

function maxDepth(root) {
    if (root === null) return 0;

    let leftDepth = maxDepth(root.left);
    let rightDepth = maxDepth(root.right);

    return 1 + Math.max(leftDepth, rightDepth);
}

const root = new TreeNode(1);

root.left = new TreeNode(2);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

root.right = new TreeNode(3);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

console.log(maxDepth(root));