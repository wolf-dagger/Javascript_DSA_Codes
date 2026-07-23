// https://leetcode.com/problems/path-sum/?q=lowest+comman+ancester

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function solve(root, target) {

    function dfs(root, remaining) {
        if (root === null) return false;

        remaining -= root.val;

        if (root.left === null && root.right === null) {
            return remaining === 0;
        }

        return dfs(root.left, remaining) || dfs(root.right, remaining);
    }

    return dfs(root, target);
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


console.log(solve(root, 22));