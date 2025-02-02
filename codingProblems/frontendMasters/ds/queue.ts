type Node<T> = {
    value: T,
    next?: Node<T>,
};

export default class Queue<T> {

    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.head = undefined;
        this.tail = undefined;
        this.length = 0;
    }

    enqueue(item: T): void {
        const node = { value: item } as Node<T>;
        this.length++;

        if (!this.tail) {
            // If the queue is empty, set both head and tail to the new node
            this.head = this.tail = node;
            return;
        }

        // Append to the tail and update the tail reference
        this.tail.next = node;
        this.tail = node;
    }

    deque(): T | undefined {
        if (!this.head) {
            return undefined;
        }

        const head = this.head;
        this.head = this.head.next;

        // If the queue becomes empty after dequeuing, set the tail to undefined
        if (!this.head) {
            this.tail = undefined;
        }

        this.length--;
        return head.value;
    }

    peek(): T | undefined {
        return this.head?.value;
    }
}