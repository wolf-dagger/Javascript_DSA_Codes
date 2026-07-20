// https://leetcode.com/problems/binary-tree-preorder-traversal/description/

class TreeNode {
    constructor(val) {
        this.val = val === undefined ? 0 : val;
        this.left = null;
        this.right = null;
    }
}

function inorderTraversal(root) {

    let result = [];

    function iot(node) {
        if (node === null) return;

        iot(node.left)
        result.push(node.val)
        iot(node.right);
    }

    iot(root);

    return result;
}

const root = new TreeNode(1);

root.left = new TreeNode(2);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

root.right = new TreeNode(3);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

console.log(inorderTraversal(root));
