/* In linear_search we simply traverse the list completely and 
match each element of the list with the item whose location is to be found.
 If the match is found, then the location of the item is returned; otherwise,
 the algorithm returns NULL.The worst case scenario is  O(N).*/

export default function linear_search(haystack: number[], needle: number): boolean {
	for (let i = 0; i < haystack.length; i++) {
		if (haystack[i] === needle) {
			return true;
		}
	}
	return false;
}