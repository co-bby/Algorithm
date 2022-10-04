/* In QuickSort you choose a  pivot element. You put everything smaller than the pivot element into a 'left' 
and everything that's greater than the pivot into a 'right.

Repeat  the process for the individual 'left and right arrays till you have an arrays till you have an array of length 1

Repeatedly concatenate the left array , pivot and right array till one array remains

*/


export default function quick_sort(arr: number[]): number[] {

	//  We us r this to stop the function to stop running recursively 
	// after the array length is less than two.
	if (arr.length < 2) {
		return arr;
	}

	// the pivot is the last element of the array
	let pivot = arr[arr.length - 1];

	let left = [];
	let right = [];

	for (let i = 0; i < arr.length - 1; i++) {
		if (arr[i] < pivot) {
			left.push(arr[i]);
		} else {
			right.push(arr[i]);
		}
	}
	return [...quick_sort(left), pivot, ...quick_sort(right)];
}
// const array = [8, 20, -2, 4, -6];

// console.log(quick_sort(array))