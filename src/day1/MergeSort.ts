export default function mergeSort(arr: number[]): number[] {
	if (arr.length < 2) {
		return arr;
	}

	// The niddle index of the array
	let mid = Math.floor(arr.length / 2)

	// the first half of the array
	let leftArr = arr.slice(0, mid);

	// the second half of the array
	let rightArr = arr.slice(mid);

	return merge(mergeSort(leftArr), mergeSort(rightArr));

}


function merge(leftArr: any[], rightArr: any[]): number[] {
	const sortedArr: number[] = [];
	while (leftArr.length && rightArr.length) {
		if (leftArr[0] <= rightArr[0]) {
			/* removes the first element from the array and
			 pushes it onto the the sorted array*/
			sortedArr.push(leftArr.shift());
		} else {
			sortedArr.push(rightArr.shift());
		}
	}
	return [...sortedArr, ...leftArr, ...rightArr];
}

// const array = [8, 20, -2, 4, -6];

// console.log(mergeSort(array))