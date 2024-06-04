class TrieNode {
    children: Map<string, TrieNode>;
    isEndOfWord: boolean;

    constructor() {
        this.children = new Map();
        this.isEndOfWord = false;
    }
}

export default class Trie {
    root: TrieNode;
    
    constructor() {
        this.root = new TrieNode();
    }

    insert(item: string): void {
        let node = this.root;
        for (let i = 0; i < item.length; i++) {
            const char = item[i];
            if (!node.children.has(char)) {
                node.children.set(char, new TrieNode());
            }
            node = node.children.get(char)!;
        }
        node.isEndOfWord = true;
     }
    
    delete(item: string): void { 
        let node = this.root;
        for (let i = 0; i < item.length; i++) {
            const char = item[i];
            if (!node.children.has(char)) {
                return;
            }
            node = node.children.get(char)!;
        }
        node.isEndOfWord = false;
    }
    
    find(partial: string): string[] { 
        let node = this.root;
        for (let i = 0; i < partial.length; i++) {
            const char = partial[i];
            if (!node.children.has(char)) {
                return [];
            }
            node = node.children.get(char)!;
        }
        return this.findWords(node, partial);
    }

    findWords(node: TrieNode, prefix: string): string[] {
        let words: string[] = [];
        if (node.isEndOfWord) {
            words.push(prefix);
        }
        for (const [char, child] of node.children) {
            words = words.concat(this.findWords(child, prefix + char));
        }
        return words;
    }
    
}