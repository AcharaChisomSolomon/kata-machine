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
    
    delete(): number {}
    
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