type Node<T> = {
    value: T;
    next: Node<T> | null;
}

export default class Queue<T> {
    public length: number;
    private head: Node<T> | null;
    private tail: Node<T> | null;

    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    enqueue(item: T): void{
        const newNode = { value: item, next: null };
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail!.next = newNode;
            this.tail = newNode;
        }
        this.length++;
     }

    deque(): T | undefined {
        if (this.length === 0) {
            return undefined;
        }
        const value = this.head!.value;
        this.head = this.head!.next;
        this.length--;
        return value;
     }
    
    peek(): T | undefined {
        return this.head?.value;
    }
    
}