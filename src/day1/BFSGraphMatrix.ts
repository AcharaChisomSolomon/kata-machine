function walk(graph: WeightedAdjacencyMatrix, source: number, needle: number, visited: boolean[], walkedPath: number[]): number[] | null {
    if (source === needle) {
        return walkedPath;
    }

    visited[source] = true;

    for (let i = 0; i < graph[source].length; i++) {
        const weight = graph[source][i];

        if (weight !== 0) {
            const to = i;
            if (!visited[to]) {
                const path = walk(graph, to, needle, visited, [...walkedPath, to]);
                if (path) {
                    return path;
                }
            }
        }
    }

    return null;
}

export default function bfs(graph: WeightedAdjacencyMatrix, source: number, needle: number): number[] | null {
    const visited = Array(graph.length).fill(false);
    return walk(graph, source, needle, visited, [source]);
}