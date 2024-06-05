function walk(
    graph: WeightedAdjacencyList,
    source: number,
    needle: number,
    visited: boolean[],
    walkedPath: number[]
): number[] | null {
    if (source === needle) {
        return walkedPath;
    }

    visited[source] = true;
    const children = graph[source];

    for (let i = 0; i < children.length; i++) {
        const child = children[i];
        if (!visited[child.to]) {
            const path = walk(graph, child.to, needle, visited, [...walkedPath, child.to]);
            if (path) {
                return path;
            }
        }
    }

    return null;
}

export default function dfs(
    graph: WeightedAdjacencyList,
    source: number,
    needle: number
): number[] | null {
    const visited = Array(graph.length).fill(false);
    return walk(graph, source, needle, visited, [source]);
}