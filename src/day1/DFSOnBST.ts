export default function dfs(head: BinaryNode<number> | null, needle: number): boolean {
    if (head === null) return false;
    if (head.value === needle) return true;
    return dfs(head.left, needle) || dfs(head.right, needle);
}