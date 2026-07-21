// https://leetcode.com/problems/find-bottom-left-tree-value/description/

class TreeNode {
    constructor(val) {
        this.val = val === undefined ? 0 : val;
        this.left = null;
        this.right = null;
    }
}

function solve(root) {
    let leftMost;
    if (root === null) return null;

    let queue = [];

    queue.push(root);

    while (queue.length > 0) {
        let len = queue.length;

        leftMost = queue[0].val;

        for (let i = 0; i < len; i++) {
            let curr = queue.shift();
            if (curr.left !== null) queue.push(curr.left);
            if (curr.right !== null) queue.push(curr.right);
        }
    }

    return leftMost;
}

const root = new TreeNode(1);

root.left = new TreeNode(2);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

root.right = new TreeNode(3);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

console.log(solve(root));