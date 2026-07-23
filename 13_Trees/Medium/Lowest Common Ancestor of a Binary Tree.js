// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function solve(root, p, q) {

    // Base Case
    if (root === null) return null;

    // If current node is p or q
    if (root === p || root === q) {
        return root;
    }

    // Search left and right subtree
    let left = solve(root.left, p, q);
    let right = solve(root.right, p, q);

    // If both are found, current node is LCA
    if (left !== null && right !== null) {
        return root;
    }

    // Otherwise return whichever side found a node
    return left !== null ? left : right;
}


const root = new TreeNode(3);

const node5 = new TreeNode(5);
const node1 = new TreeNode(1);

const node6 = new TreeNode(6);
const node2 = new TreeNode(2);

const node0 = new TreeNode(0);
const node8 = new TreeNode(8);

const node7 = new TreeNode(7);
const node4 = new TreeNode(4);

root.left = node5;
root.right = node1;

node5.left = node6;
node5.right = node2;

node1.left = node0;
node1.right = node8;

node2.left = node7;
node2.right = node4;


console.log("LCA of 5 and 1:", solve(root, node5, node1).val);
