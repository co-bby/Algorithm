/* Binary Search is a searching algorithm used in a sorted array by 
repeatedly dividing the search interval in half. Worst case scenario is O(log n)*/
export default function bs_list(haystack: number[], needle: number): boolean {
	// first index of an array
	let firstIndex = 0;
	// last index of an array
	let lastIndex = haystack.length - 1;
	while (firstIndex <= lastIndex) {
		// middle index of an array
		let middleIndex = Math.floor((firstIndex + lastIndex) / 2);
		// if the element needle is found in the middle of haystack return true
		if (haystack[middleIndex] === needle) {
			return true;
		}
		//if the element needle is found at the left side of haystack the last index changes
		else if (needle < haystack[middleIndex]) {
			lastIndex = middleIndex - 1;
		}
		//if the element needle is found at the right side of haystack the first index changes
		else {
			firstIndex = middleIndex + 1;
		}

	}
	return false;
}