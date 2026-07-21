// https://leetcode.com/problems/all-elements-in-two-binary-search-trees/description/

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function solve(root1, root2) {
    const arr1 = toArray(root1);
    const arr2 = toArray(root2);

    const ans = [...arr1, ...arr2];

    return ans.sort((a, b) => a - b);
}

function toArray(root) {
    let result = [];

    function inOrder(root) {
        if (root === null) return null;

        inOrder(root.left);
        result.push(root.val);
        inOrder(root.right);
    }

    inOrder(root);

    return result;
}


const root1 = new TreeNode(2);

root1.left = new TreeNode(1);
root1.right = new TreeNode(4);

const root2 = new TreeNode(1);

root2.left = new TreeNode(0);
root2.right = new TreeNode(3);


console.log(solve(root1, root2));