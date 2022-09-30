/*Bubble Sort is the simplest sorting algorithm that works by repeatedly 
swapping the adjacent elements. Big O = O(N^2) */

export default function bubble_sort(arr: number[]): void {
	let swapped;
	do {
		swapped = false;
		for (let i = 0; i < arr.length - 1; i++) {
			// when an adjacent element is in wrong order swap
			if (arr[i] > arr[i + 1]) {
				let temp = arr[i];
				arr[i] = arr[i + 1];
				arr[i + 1] = temp;
				swapped = true;
			}
		}
	} while (swapped)

}

