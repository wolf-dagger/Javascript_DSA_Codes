// https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function solve(nums) {

    function build(left, right) {

        if (left > right) return null;

        let mid = Math.floor(left + (right - left) / 2);

        let root = new TreeNode(nums[mid]);

        root.left = build(left, mid - 1);
        root.right = build(mid + 1, right);

        return root;
    }

    return build(0, nums.length - 1);
}


const values = [-10, -3, 0, 5, 9];
console.log(solve(values));