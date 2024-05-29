const directions = [
    { x: 0, y: -1 },
    { x: 1, y: 0 },
    { x: 0, y: 1 },
    { x: -1, y: 0 }
];

function walk(maze: string[], wall: string, end: Point, currentPos: Point, walkedPath: boolean[][], points: Point[]): boolean {
    if (currentPos.x < 0 || currentPos.y < 0 || currentPos.x >= maze[0].length || currentPos.y >= maze.length) {
        return false;
    }
    if (maze[currentPos.y][currentPos.x] === wall) {
        return false;
    }
    if (walkedPath[currentPos.y][currentPos.x]) {
        return false;
    }
    if (currentPos.x === end.x && currentPos.y === end.y) {
        points.push(currentPos);
        return true;
    }

    walkedPath[currentPos.y][currentPos.x] = true;

    for (let direction of directions) {
        let nextPos = { x: currentPos.x + direction.x, y: currentPos.y + direction.y };
        if (walk(maze, wall, end, nextPos, walkedPath, points)) {
            points.push(currentPos);
            return true;
        }
    }

    return false;
}


export default function solve(maze: string[], wall: string, start: Point, end: Point): Point[] {
    let walkedPath = new Array(maze.length).fill(false).map(() => new Array(maze[0].length).fill(false));
    let points: Point[] = [];
    walk(maze, wall, end, start, walkedPath, points);
    return points;
}