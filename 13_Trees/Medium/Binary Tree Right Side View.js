// https://leetcode.com/problems/binary-tree-right-side-view/description/?q=right+side+view

class TreeNode {
    constructor(val) {
        this.val = val === undefined ? 0 : val;
        this.left = null;
        this.right = null;
    }
}

function solve(root) {
    let ans = [];
    if (root === null) return [];

    let queue = [];

    queue.push(root);

    while (queue.length > 0) {
        let len = queue.length;

        ans.push(queue[0].val);

        for (let i = 0; i < len; i++) {
            let curr = queue.shift();
            if (curr.right !== null) queue.push(curr.right);
            if (curr.left !== null) queue.push(curr.left);
        }

    }
    return ans;
}

const root = new TreeNode(1);

root.left = new TreeNode(2);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

root.right = new TreeNode(3);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

console.log(solve(root));