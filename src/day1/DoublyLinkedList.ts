type Node<T> = {
    prev?: Node<T>,
    next?: Node<T>
}

export default class DoublyLinkedList<T> {
    public length: number;
    private head?: Node<T>



    constructor() {
        this.length = 0;
        this.head = undefined;

    }

    prepend(item: T): void {
        const node = { value: item } as Node<T>;
        this.length++
        if (!this.head) {
            this.head = node;
            return;
        }
        node.next = this.head
        this.head.prev = node
        this.head = node;
    }
    insertAt(item: T, idx: number): void {
        if (idx > this.length) {
            throw new Error("oh noooo you cant do that");

        } else if (idx === this.length) {
            this.append(item);
            return;

        } else if (idx === 0) {
            this.append(item);
            return;
        }
        let curr = this.head
        for (let i = 0; curr && i < idx; ++i) {
            curr = curr.next
        }
        curr = curr as Node<T>
        const node = { value: item } as Node<T>;
        node.next = curr
        node.prev = curr.prev
        node.next = node

        if (curr.prev) {
            curr.prev.next = node
        }

    }
    append(item: T): void {

    }
    remove(item: T): T | undefined {

    }
    get(idx: number): T | undefined {

    }
    removeAt(idx: number): T | undefined {

    }
}