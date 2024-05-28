type Node<T> = {
    data: T;
    next: Node<T> | null;
    prev: Node<T> | null;
}

export default class DoublyLinkedList<T> {
    public length: number = 0;
    private head: Node<T> | null = null;
    private tail: Node<T> | null = null;

    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    prepend(item: T): void {
        const newNode: Node<T> = {
            data: item,
            next: this.head,
            prev: null
        }

        if (this.head) {
            this.head.prev = newNode;
        } else {
            this.tail = newNode;
        }

        this.head = newNode;
        this.length++;
    }

    insertAt(item: T, idx: number): void {
        if (idx < 0 || idx > this.length) {
            throw new Error('Index out of bounds');
        }

        if (idx === 0) {
            this.prepend(item);
            return;
        }

        if (idx === this.length) {
            this.append(item);
            return;
        }

        const newNode: Node<T> = {
            data: item,
            next: null,
            prev: null
        }

        let current = this.head;
        let i = 0;

        while (current && i < idx) {
            current = current.next;
            i++;
        }

        if (current) {
            newNode.next = current;
            newNode.prev = current.prev;
            current.prev = newNode;
            if (newNode.prev) {
                newNode.prev.next = newNode;
            }
            this.length++;
        }
    }

    append(item: T): void {
        const newNode: Node<T> = {
            data: item,
            next: null,
            prev: this.tail
        }

        if (this.tail) {
            this.tail.next = newNode;
        } else {
            this.head = newNode;
        }

        this.tail = newNode;
        this.length++;
    }

    remove(item: T): T | undefined {
        let current = this.head;
        while (current) {
            if (current.data === item) {
                if (current.prev) {
                    current.prev.next = current.next;
                } else {
                    this.head = current.next;
                }

                if (current.next) {
                    current.next.prev = current.prev;
                } else {
                    this.tail = current.prev;
                }

                this.length--;
                return current.data;
            }
            current = current.next;
        }

        return undefined;
    }

    get(idx: number): T | undefined {
        if (idx < 0 || idx >= this.length) {
            return undefined;
        }

        let current = this.head;
        let i = 0;

        while (current && i < idx) {
            current = current.next;
            i++;
        }

        return current ? current.data : undefined;
    }

    removeAt(idx: number): T | undefined {
        if (idx < 0 || idx >= this.length) {
            return undefined;
        }

        let current = this.head;
        let i = 0;

        while (current && i < idx) {
            current = current.next;
            i++;
        }

        if (current) {
            if (current.prev) {
                current.prev.next = current.next;
            } else {
                this.head = current.next;
            }

            if (current.next) {
                current.next.prev = current.prev;
            } else {
                this.tail = current.prev;
            }

            this.length--;
            return current.data;
        }

        return undefined;
    }
}