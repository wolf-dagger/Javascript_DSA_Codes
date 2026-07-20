// https://leetcode.com/problems/binary-tree-preorder-traversal/

class TreeNode {
    constructor(val) {
        this.val = val === undefined ? 0 : val;
        this.left = null;
        this.right = null;
    }
}

function preorderTraversal(root) {
    let result = [];

    function preOrder(node) {
        if (node === null) return;

        result.push(node.val);
        preOrder(node.left);
        preOrder(node.right);
    }

    preOrder(root);

    return result;
}

const root = new TreeNode(1);

root.left = new TreeNode(2);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

root.right = new TreeNode(3);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

console.log(preorderTraversal(root));