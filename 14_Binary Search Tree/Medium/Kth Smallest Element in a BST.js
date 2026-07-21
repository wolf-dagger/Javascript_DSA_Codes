// https://leetcode.com/problems/kth-smallest-element-in-a-bst/

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function solve(root, k) {
    let count = 0;
    let result;

    function inOrder(root) {
        if (root === null || result !== undefined) return;

        inOrder(root.left);
        count++;

        if (count === k) {
            result = root.val;
            return;
        }
        inOrder(root.right);
    }

    inOrder(root);

    return result;
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

console.log(solve(root, 3));