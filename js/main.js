function getIndex(array, elem) {
	let difference = 0;
	return binarySearch(array);
	function binarySearch(arr) {
		if (arr.length === 1) {
			return (arr[0] == elem) ? difference : "element isn't in the array";
		} else {
			const middleIndex = Math.floor(arr.length / 2);
			if (elem === arr[middleIndex]) {
				return difference += middleIndex;
			} else if (elem >= arr[middleIndex]) {
				difference += middleIndex;
				return binarySearch(arr.splice(middleIndex));
			} else {
				return binarySearch(arr.splice(0, middleIndex));
			}
		}
	}
}

console.log(getIndex([2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21], 12));
console.log(getIndex([-16, -7, -3, -2, -1, 0, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23], -8));