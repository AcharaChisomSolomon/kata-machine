function qs(arr: number[], left: number, right: number): void {
    if (left >= right) {
        return;
    }
    let pivot = arr[Math.floor((left + right) / 2)];
    let index = partition(arr, left, right, pivot);
    qs(arr, left, index - 1);
    qs(arr, index, right);
}

function partition(arr: number[], left: number, right: number, pivot: number): number {
    while (left <= right) {
        while (arr[left] < pivot) {
            left++;
        }
        while (arr[right] > pivot) {
            right--;
        }
        if (left <= right) {
            let temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left++;
            right--;
        }
    }
    return left;
}

export default function quick_sort(arr: number[]): void {
    qs(arr, 0, arr.length - 1);
}