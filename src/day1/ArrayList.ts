export default class ArrayList<T> {
    public length: number;
    capacity: number;
    data: {
        [index: number]: T;
    };

    constructor(startingCapacity: number) {
        this.length = 0;
        this.capacity = startingCapacity;
        this.data = new Array(startingCapacity);
    }

    prepend(item: T): void {
        if (this.length === this.capacity) {
            this.resize();
        }
        for (let i = this.length; i > 0; i--) {
            this.data[i] = this.data[i - 1];
        }
        this.data[0] = item;
        this.length++;
    }
    
    insertAt(item: T, idx: number): void {
        if (this.length === this.capacity) {
            this.resize();
        }
        for (let i = this.length; i > idx; i--) {
            this.data[i] = this.data[i - 1];
        }
        this.data[idx] = item;
        this.length++;
    }
    
    append(item: T): void {
        if (this.length === this.capacity) {
            this.resize();
        }
        this.data[this.length] = item;
        this.length++;
    }
    
    remove(item: T): T | undefined {
        for (let i = 0; i < this.length; i++) {
            if (this.data[i] === item) {
                for (let j = i; j < this.length - 1; j++) {
                    this.data[j] = this.data[j + 1];
                }
                this.length--;
                return item;
            }
        }
        return undefined;
    }
    
    get(idx: number): T | undefined {
        return this.data[idx];
    }
    
    removeAt(idx: number): T | undefined {
        if (idx < 0 || idx >= this.length) {
            return undefined;
        }
        const item = this.data[idx];
        for (let i = idx; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        this.length--;
        return item;
    }
    
    private resize(): void {
        const newCapacity = this.capacity * 2;
        const newData = new Array(newCapacity);
        for (let i = 0; i < this.length; i++) {
            newData[i] = this.data[i];
        }
        this.data = newData;
        this.capacity = newCapacity;
    }
    
}