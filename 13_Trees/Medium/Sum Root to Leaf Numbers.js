// https://leetcode.com/problems/sum-root-to-leaf-numbers/description/?q=lowest+comman+ancester

class TreeNode {
    constructor(value) {
        this.val = undefined ? null : value;
        this.left = null;
        this.right = null;
    }
}

function solve(root) {

    function dfs(node, current) {
        if (node === null) return null;

        current = current * 10 + node.val;

        if (node.left === null && node.right === null) return current;

        return dfs(node.left, current) + dfs(node.right, current);
    }

    return dfs(root, 0);
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);

console.log(solve(root));

// O(n)