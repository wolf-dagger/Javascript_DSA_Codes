export default class Stack {
    constructor() {
        this.items = [];
    }

    push(val) {
        this.items.push(val);
    }

    pop() {
        return this.isEmpty() ? null : this.items.pop();
    }

    peek() {
        return this.isEmpty() ? null : this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    search(val) {
        const idx = this.items.lastIndexOf(val);
        return idx === -1 ? -1 : this.items.length - idx; // 1-based position from top
    }

    contains(val) {
        return this.items.includes(val);
    }

    clear() {
        this.items = [];
    }

    toArray() {
        return [...this.items].reverse();
    } // top → bottom like Java's toString

}

