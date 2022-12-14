/*Bubble Sort is the simplest sorting algorithm that works by repeatedly 
swapping the adjacent elements. Big O = O(N^2) */

export default function bubble_sort(arr: number[]): void | number[] {
	// let swapped;
	// do {
	// 	swapped = false;
	// 	for (let i = 0; i < arr.length - 1; i++) {
	// 		// if an adjacent element is in wrong order swap
	// 		if (arr[i] > arr[i + 1]) {
	// 			let temp = arr[i];
	// 			arr[i] = arr[i + 1];
	// 			arr[i + 1] = temp;
	// 			swapped = true;
	// 		}
	// 	}
	// } while (swapped)

	for (let i = 0; i < arr.length - 1; i++) {
		for (let j = 0; j < arr.length - i; j++) {
			if (arr[j] > arr[j + 1]) {
				let temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			}
		}




	}

}

// const arr = [3, 78, 4, 67, 2, 5]
// bubble_sort(arr);
// console.log(arr)







