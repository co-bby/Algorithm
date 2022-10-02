/*Insertion sort is a simple sorting algorithm 
that builds the final sorted array (or list) one item at a time.
Big O = O(n^2)*/

export default function insertion_sort(arr: number[]) {
	for (let i = 1; i < arr.length; i++) {

		let numberToInsert = arr[i];
		// the index before the number to Insert
		let j = i - 1

		/*J must be greater than zero and 
		should be greater than the number to insert */
		while (j >= 0 && arr[j] > numberToInsert) {
			arr[j + 1] = arr[j]
			j = j - 1;


		}

		arr[j + 1] = numberToInsert;


	}
}

const arr = [8, 20, -2, 4, -6];
insertion_sort(arr);
console.log(arr);