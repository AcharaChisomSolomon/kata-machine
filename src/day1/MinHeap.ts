export default class MinHeap {
    public length: number;
    private heap: number[] = [];

    constructor() {
        this.length = 0;
        this.heap = [];
    }

    insert(value: number): void { 
        this.heap.push(value);
        this.length++;
        this.heapify();
    }
    
    delete(): number {
        if (this.length === 0) {
            return -1;
        }
        const deletedValue = this.heap[0];
        this.heap[0] = this.heap[this.length - 1];
        this.heap.pop();
        this.length--;
        this.heapifyDown();
        return deletedValue;
    }

    private heapifyDown(): void {
        let index = 0;
        while (index < this.length) {
            const leftChildIndex = this.getLeftChildIndex(index);
            const rightChildIndex = this.getRightChildIndex(index);
            if (leftChildIndex >= this.length) {
                break;
            }
            let smallerChildIndex = leftChildIndex;
            if (rightChildIndex < this.length && this.heap[rightChildIndex] < this.heap[leftChildIndex]) {
                smallerChildIndex = rightChildIndex;
            }
            if (this.heap[index] > this.heap[smallerChildIndex]) {
                this.swap(index, smallerChildIndex);
                index = smallerChildIndex;
            } else {
                break;
            }
        }
    }
    
    private heapify(): void { 
        let index = this.length - 1;
        while (index > 0) {
            const parentIndex = this.getParentIndex(index);
            if (this.heap[parentIndex] > this.heap[index]) {
                this.swap(parentIndex, index);
                index = parentIndex;
            } else {
                break;
            }
        }
    }

    private swap(index1: number, index2: number): void { 
        const temp = this.heap[index1];
        this.heap[index1] = this.heap[index2];
        this.heap[index2] = temp;
    }

    private getParentIndex(index: number): number { 
        return Math.floor((index - 1) / 2);
    }

    private getLeftChildIndex(index: number): number { 
        return 2 * index + 1;
    }

    private getRightChildIndex(index: number): number { 
        return 2 * index + 2;
    }

}