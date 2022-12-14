export default class Stack<T> {
    // public length: number;
    public Stck: number[];
    private top: number;
    public size: number




    constructor(size: number) {

        this.Stck = [];
        this.top = -1;
        this.size = size;


    }

    push(item: number): void {
        if (this.top > this.size) {
            console.log("stack is full")
        } else {

            this.Stck[this.top++] = item;
        }




    }
    pop(): number | void {
        if (this.top < 0) {
            console.log("stack is undeflow");
        } else {
            this.Stck[this.top--];
        }

    }
    peek(): number {
        return this.Stck[this.Stck.length - 1];

    }
}