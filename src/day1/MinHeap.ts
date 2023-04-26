export default class MinHeap {
    public length: number;
    private data: number[];



    constructor() {
        this.data = []
        this.length = 0;
    }

    insert(value: number): void {

    }
    delete(): number {

    }

    private heapifyDown(idx: number): void {
        const lIdx = this.leftChild(idx);
        const rIdx = this.rightChild(idx);

        if (idx > this.length || lIdx >= this.length) return;

        const lv = this.data[lIdx];
        const rv = this.data[rIdx];
        const v = this.data[idx];

        if (lv > rv && lv < v) {
            this.data[idx] = rv;
            this.data[rIdx] = v;
            this.heapifyDown(rIdx);
        }
        else if (rv < lv && v > lv) {
            this.data[idx] = lv;
            this.data[lIdx] = v;
            this.heapifyDown(lIdx);
        }

    }
    private heapifyUp(idx: number) {
        if (idx === 0) return;

        const p = this.parent(idx);
        const parenV = this.data[p];
        const v = this.data[idx];

        if (parenV < v) {
            this.data[p] = v;
            this.data[idx] = parenV;
            this.heapifyUp(p)
        }



    }
    private parent(idx: number): number {
        return Math.floor((idx - 1) / 2)
    }

    private leftChild(idx: number): number {
        return 2 * idx + 1
    }

    private rightChild(idx: number): number {
        return 2 * idx + 2
    }
}