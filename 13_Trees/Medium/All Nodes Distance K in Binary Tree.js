// https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function distanceK(root, target, k) {
    // Build child -> parent map
    const parentMap = new Map();

    function buildParent(node, parent) {
        if (node === null) return;

        parentMap.set(node, parent);

        buildParent(node.left, node);
        buildParent(node.right, node);
    }

    buildParent(root, null);

    // BFS
    const queue = [target];
    const visited = new Set();
    visited.add(target);

    let front = 0;
    let distance = 0;

    while (front < queue.length) {

        const size = queue.length - front;

        if (distance === k) {
            const answer = [];

            for (let i = front; i < queue.length; i++) {
                answer.push(queue[i].val);
            }

            return answer;
        }

        for (let i = 0; i < size; i++) {

            const node = queue[front++];

            const neighbors = [
                node.left,
                node.right,
                parentMap.get(node)
            ];

            for (const neighbor of neighbors) {

                if (neighbor !== null && !visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push(neighbor);
                }
            }
        }

        distance++;
    }

    return [];
}

const root = new TreeNode(3);

root.left = new TreeNode(5);
root.right = new TreeNode(1);

root.left.left = new TreeNode(6);
root.left.right = new TreeNode(2);

root.right.left = new TreeNode(0);
root.right.right = new TreeNode(8);

root.left.right.left = new TreeNode(7);
root.left.right.right = new TreeNode(4);

console.log(distanceK(root, 5, 2));