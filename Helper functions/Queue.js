export default class Queue {
    constructor() {
        this.items = {};
        this.frontIndex = 0;
        this.rearIndex = 0;
    }

    enqueue(element) {
        this.items[this.rearIndex] = element;
        this.rearIndex++;
    }

    dequeue() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }

        let item = this.items[this.frontIndex];
        delete this.items[this.frontIndex];
        this.frontIndex++;

        return item;
    }

    front() {
        return this.items[this.frontIndex];
    }

    isEmpty() {
        return this.rearIndex === this.frontIndex;
    }

    size() {
        return this.rearIndex - this.frontIndex;
    }
}