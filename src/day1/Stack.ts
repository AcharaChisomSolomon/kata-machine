type StackNode<T> = {
    value: T;
    next: StackNode<T> | undefined;
};

export default class Stack<T> {
    public length: number;
    private head: StackNode<T> | undefined;

    constructor() {
        this.length = 0;
        this.head = undefined;
    }

    push(item: T): void { 
        const newNode = { value: item, next: this.head };
        this.head = newNode;
        this.length++;
    }
    
    pop(): T | undefined {
        if (this.head === undefined) {
            return undefined;
        }
        const value = this.head.value;
        this.head = this.head.next;
        this.length--;
        return value;
    }
    
    peek(): T | undefined {
        return this.head?.value;
    }
    
}