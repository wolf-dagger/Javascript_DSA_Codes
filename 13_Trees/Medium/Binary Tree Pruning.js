// https://leetcode.com/problems/binary-tree-pruning/description/

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function solve(root) {

    function prune(node) {
        if (node === null) return null;

        node.left = prune(node.left);
        node.right = prune(node.right);

        if (
            node.val === 0 &&
            node.left === null &&
            node.right === null
        ) {
            return null;
        }
        return node;
    }

    return prune(root);
}

const root = new TreeNode(1);

root.left = new TreeNode(0);
root.right = new TreeNode(1);

root.left.left = new TreeNode(0);
root.left.right = new TreeNode(0);

root.left.left.left = new TreeNode(1);

root.right.left = new TreeNode(0);
root.right.right = new TreeNode(1);

root.right.left.right = new TreeNode(0);

console.log(solve(root));