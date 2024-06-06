export default function dijkstra_list(source: number, sink: number, arr: WeightedAdjacencyList): number[] {
    const walked: boolean[] = new Array(arr.length).fill(false);
    const distance: number[] = new Array(arr.length).fill(Infinity);
    const previous: number[] = new Array(arr.length).fill(-1);

    distance[source] = 0;

    while (hasUnvisited(walked, distance)) {
        const current = getMinUnvisited(walked, distance);
        walked[current] = true;

        for (const edge of arr[current]) {
            const newDistance = distance[current] + edge.weight;
            if (newDistance < distance[edge.to]) {
                distance[edge.to] = newDistance;
                previous[edge.to] = current;
            }
        }
    }

    return getPath(previous, source, sink);
}

function getPath(previous: number[], source: number, sink: number): number[] {
    const path: number[] = [];
    let current = sink;
    while (current !== source) {
        path.unshift(current);
        current = previous[current];
    }
    path.unshift(source);
    return path;
}

function hasUnvisited(walked: boolean[], distance: number[]): boolean {
    return walked.some((v, i) => !v && distance[i] !== Infinity);
}

function getMinUnvisited(walked: boolean[], distance: number[]): number {
    let min = Infinity;
    let minIndex = -1;
    for (let i = 0; i < walked.length; i++) {
        if (!walked[i] && distance[i] < min) {
            min = distance[i];
            minIndex = i;
        }
    }
    return minIndex;
}