function walk(
    graph: WeightedAdjacencyMatrix,
    source: number,
    needle: number,
    visited: boolean[]
): number[] | null {
    const queue: number[] = [];
    const walkedPath: number[] = Array(graph.length).fill(-1);
    queue.push(source);
    visited[source] = true;

    while (queue.length > 0) {
        const current = queue.shift()!;
        if (current === needle) {
            break;
        }

        for (let i = 0; i < graph[current].length; i++) {
            const weight = graph[current][i];

            if (weight !== 0) {
                const to = i;
                if (!visited[to]) {
                    queue.push(to);
                    visited[to] = true;
                    walkedPath[to] = current;
                }
            }
        }
    }

    if (walkedPath[needle] === -1) {
        return null;
    }

    const path: number[] = [];
    let current = needle;
    while (current !== source) {
        path.unshift(current);
        current = walkedPath[current];
    }

    path.unshift(source);
    return path;
}

export default function bfs(
    graph: WeightedAdjacencyMatrix,
    source: number,
    needle: number
): number[] | null {
    const visited = Array(graph.length).fill(false);
    return walk(graph, source, needle, visited);
}