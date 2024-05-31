function traverse_tree(node: BinaryNode<number> | null, result: number[]): void {
    if (node === null) return;
    traverse_tree(node.left, result);
    traverse_tree(node.right, result);
    result.push(node.value);
}

export default function post_order_search(head: BinaryNode<number>): number[] {
    const result: number[] = [];
    traverse_tree(head, result);
    return result;
}