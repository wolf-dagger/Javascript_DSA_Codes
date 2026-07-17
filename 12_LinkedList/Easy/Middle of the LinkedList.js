// https://leetcode.com/problems/middle-of-the-linked-list/

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function solve(head) {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow.data;
}

const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

console.log(solve(head));
