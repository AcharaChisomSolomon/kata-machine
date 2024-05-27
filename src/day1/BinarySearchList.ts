export default function bs_list(haystack: number[], needle: number): boolean {
    let low = 0
    let high = haystack.length - 1

    while (low <= high) {
        let mid = Math.floor((low + high) / 2)
        let guess = haystack[mid]

        if (guess === needle) {
            return true
        }

        if (guess > needle) {
            high = mid - 1
        } else {
            low = mid + 1
        }
    }

    return false
}