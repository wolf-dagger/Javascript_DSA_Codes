// https://leetcode.com/problems/binary-tree-level-order-traversal/description/

class TreeNode {
    constructor(val) {
        this.val = val === undefined ? 0 : val;
        this.left = null;
        this.right = null;
    }
}

function levelOrderTraversal(root) {

    if (root === null) return [];

    let result = [];
    let queue = [];

    queue.push(root);

    while (queue.length > 0) {

        let size = queue.length;

        let ans = [];

        for (let i = 0; i < size; i++) {
            let node = queue.shift();

            ans.push(node.val);

            if (node.left !== null) queue.push(node.left);

            if (node.right !== null) queue.push(node.right);
        }


        result.push(ans);
    }

    return result;
}

const root = new TreeNode(1);

root.left = new TreeNode(2);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

root.right = new TreeNode(3);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

console.log(levelOrderTraversal(root));


// O(n)