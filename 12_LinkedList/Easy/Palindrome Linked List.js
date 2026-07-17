// https://leetcode.com/problems/palindrome-linked-list/description/

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function solve(head) {
    let string1 = '';
    let string2 = '';

    let node = head;

    while (node !== null) {
        string1 = `${string1}${node.data}`;
        string2 = `${node.data}${string2}`;
        node = node.next;
    }

    return string1 === string2;
}

const head = new Node(1);
head.next = new Node(2);
head.next = new Node(2);
head.next = new Node(1);

console.log(solve(head));

// O(n)