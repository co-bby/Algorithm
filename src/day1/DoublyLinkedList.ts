type Node<T> = {
    prev?: Node<T>,
    next?: Node<T>
}

export default class DoublyLinkedList<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;



    constructor() {
        this.length = 0;
        this.head = undefined;

    }

    prepend(item: T): void {
        const node = { value: item } as Node<T>;
        this.length++
        if (!this.head) {
            this.head = this.tail = node;
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
        const node = { value: item } as Node<T>
        this.length++
        if (!this.tail) {
            this.tail = this.head = node;
            this.tail = this.head = node;
            return;
        }
        node.prev = this.tail
        this.tail.next = node
        this.tail = node


    }
    remove(item: T): T | undefined {
        let curr = this.head;

        for (let i = 0; curr && i < this.length; ++i) {
            curr = { value: item } as Node<T>
            if (curr.value !== item) {
                break;
            }
            curr = curr.next

        }
        if (!curr) {
            return;
        }
        this.length--;
        if (this.length === 0) {
            this.head = this.tail = undefined;
            return;
        }
        if (curr.prev) {
            curr.prev = curr.next
        }
        if (curr.next) {
            curr.next = curr.prev
        }

        curr.prev = curr.next = undefined;


    }
    get(idx: number): T | undefined {

    }
    removeAt(idx: number): T | undefined {

    }
}