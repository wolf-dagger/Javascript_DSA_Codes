// https://leetcode.com/problems/two-sum-iv-input-is-a-bst/description/

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function solve(root, target) {
    let res = [];

    function inOrder(node) {
        if (node === null) return null;

        inOrder((node.left));
        res.push(node.val);
        inOrder((node.right));
    }

    inOrder(root);

    return contains(res, target);
}

function contains(res, target) {
    let left = 0;
    let right = res.length - 1;

    while (left < right) {
        let sum = res[left] + res[right];
        if (sum === target) {
            return true;
        } else if (sum > target) {
            right--;
        } else {
            left++;
        }
    }
    return false;
}

const root = new TreeNode(5);

root.left = new TreeNode(3);
root.right = new TreeNode(6);

root.left.left = new TreeNode(2);
root.left.right = new TreeNode(4);

root.right.right = new TreeNode(7);

console.log(solve(root, 9));