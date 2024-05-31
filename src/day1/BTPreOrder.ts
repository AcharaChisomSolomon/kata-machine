function traverse_tree(node: BinaryNode<number> | null, result: number[]): void {
  if (node === null) return;
  result.push(node.value);
  traverse_tree(node.left, result);
  traverse_tree(node.right, result);
}

export default function pre_order_search(head: BinaryNode<number>): number[] {
    const result: number[] = [];
    traverse_tree(head, result);
    return result;
}