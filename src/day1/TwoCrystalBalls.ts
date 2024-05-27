export default function two_crystal_balls(breaks: boolean[]): number {
    let step = Math.floor(Math.sqrt(breaks.length))
    let start = 0

    while (start < breaks.length) {
        if (breaks[start]) {
            break
        }
        start += step
    }

    for (let i = start - step + 1; i < breaks.length; i++) {
        if (breaks[i]) {
            return i
        }
    }

    return -1
}