class PriorityQueue {
    constructor(compare = (a, b) => a < b) {
        this.heap = [];
        this.compare = compare;
    }

    size() {
        return this.heap.length;
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    peek() {
        return this.heap[0];
    }

    enqueue(value) {
        this.heap.push(value);
        this.bubbleUp();
    }

    dequeue() {
        if (this.isEmpty()) return null;

        if (this.size() === 1) {
            return this.heap.pop();
        }

        const top = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();

        return top;
    }

    bubbleUp() {
        let index = this.heap.length - 1;

        while (index > 0) {
            let parent = Math.floor((index - 1) / 2);

            if (this.compare(this.heap[parent], this.heap[index])) {
                break;
            }

            [this.heap[parent], this.heap[index]] =
                [this.heap[index], this.heap[parent]];

            index = parent;
        }
    }

    bubbleDown() {
        let index = 0;

        while (true) {
            let left = 2 * index + 1;
            let right = 2 * index + 2;
            let best = index;

            if (
                left < this.size() &&
                this.compare(this.heap[left], this.heap[best])
            ) {
                best = left;
            }

            if (
                right < this.size() &&
                this.compare(this.heap[right], this.heap[best])
            ) {
                best = right;
            }

            if (best === index) break;

            [this.heap[index], this.heap[best]] =
                [this.heap[best], this.heap[index]];

            index = best;
        }
    }
}

export default PriorityQueue;


// const pq = new PriorityQueue((a, b) => a < b); ---------> Min-Heap
// const pq = new PriorityQueue((a, b) => a > b); ---------> Max-Heap