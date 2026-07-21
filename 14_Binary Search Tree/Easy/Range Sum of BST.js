// https://leetcode.com/problems/range-sum-of-bst/description/


class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function solve(root, low, high) {
    let sum = 0;

    function inOrder(root) {
        if (root === null) return null;

        inOrder(root.left);
        if (root.val >= low && root.val <= high) sum += root.val;
        inOrder(root.right);
    }

    inOrder(root);

    return sum;
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

console.log(solve(root, 3, 14));