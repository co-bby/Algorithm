/* The queue data strcture is sequential collection of elements that
follows the priciple of FIFO */

/*USAGE
*Printers
*CPU task scheduling
*Callback queue in javascript

*/

type Node<T> = {
    value: T,
    next?: Node<T>,
}
export default class Queue<T> {
    public length: number;
    public head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    // adds elements to the rear/tail of the collection.
    enqueue(item: T): void {
        const node = { value: item } as Node<T>;
        this.length++
        if (!this.tail) {
            this.tail = this.head = node;
            return;
        }
        this.tail.next = node;
        this.tail = node;

    }
    //remove elements to the front/head of the collection
    deque(): T | undefined {
        if (!this.head) {
            return undefined;
        }
        this.length--;
        let head = this.head;
        this.head = this.head.next;
        return head.value;
    }


    // 
    peek(): T | undefined {
        return this.head?.value;
    }
}

