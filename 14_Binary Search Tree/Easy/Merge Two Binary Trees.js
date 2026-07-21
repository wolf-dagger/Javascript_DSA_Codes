// https://leetcode.com/problems/merge-two-binary-trees/description/

const mergeTrees = function (root1, root2) {

    // If both nodes are null
    if (root1 === null && root2 === null) {
        return null;
    }

    // If one node is null, return the other
    if (root1 === null) return root2;
    if (root2 === null) return root1;

    // Create a new merged node
    let root = new TreeNode(root1.val + root2.val);

    // Merge left subtrees
    root.left = mergeTrees(root1.left, root2.left);

    // Merge right subtrees
    root.right = mergeTrees(root1.right, root2.right);

    return root;
};