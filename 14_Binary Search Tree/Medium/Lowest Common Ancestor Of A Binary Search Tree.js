// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/description/

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function solve(root, p, q) {
    if (p.val < root.val && q.val < root.val) {
        return solve(root.left, p, q);
    }

    if (p.val > root.val && q.val > root.val) {
        return solve(root.right, p, q);
    }

    return root;
}


const root = new TreeNode(8);

root.left = new TreeNode(3);
root.right = new TreeNode(10);

root.left.left = new TreeNode(1);
root.left.right = new TreeNode(6);

root.left.right.left = new TreeNode(4);
root.left.right.right = new TreeNode(7);

root.right.right = new TreeNode(14);
root.right.right.left = new TreeNode(13);

console.log(solve(root, 1, 7));