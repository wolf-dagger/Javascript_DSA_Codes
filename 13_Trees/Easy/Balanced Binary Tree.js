// https://leetcode.com/problems/balanced-binary-tree/description/

class TreeNode {
    constructor(val) {
        this.val = val === undefined ? 0 : val;
        this.left = null;
        this.right = null;
    }
}

function balanceBinaryTree(root) {

    function height(node) {

        if (node === null) return 0;

        let leftHeight = height(node.left);
        if (leftHeight === -1) return -1;

        let rightHeight = height(node.right);
        if (rightHeight === -1) return -1;

        if (Math.abs(leftHeight - rightHeight) > 1) return -1;

        return 1 + Math.max(leftHeight, rightHeight);
    }

    return height(root) !== -1;
}

const root = new TreeNode(1);

root.left = new TreeNode(2);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

root.right = new TreeNode(3);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

console.log(balanceBinaryTree(root));