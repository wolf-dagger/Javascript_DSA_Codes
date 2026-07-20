// https://leetcode.com/problems/binary-tree-postorder-traversal/

class TreeNode {
    constructor(val) {
        this.val = val === undefined ? 0 : val;
        this.left = null;
        this.right = null;
    }
}

function postOrderTraversal(root) {
    let result = [];

    function postOrder(node) {
        if (node === null) return;

        postOrder(node.left);
        postOrder(node.right);
        result.push(node.val);
    }

    postOrder(root);

    return result;
}

const root = new TreeNode(1);

root.left = new TreeNode(2);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

root.right = new TreeNode(3);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

console.log(postOrderTraversal(root));