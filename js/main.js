function getIndex ( arr, elem, counter = 0){
	if(arr.length === 1){
		return (arr[0] == elem) ? counter : "element isn't in the array";
	} else{
		const middleIndex = Math.floor(arr.length/2);
		if(elem >= arr[middleIndex]){
			return getIndex(arr.splice(middleIndex), elem, counter+middleIndex);
		} else {
			return getIndex(arr.splice(0, middleIndex), elem, counter);
		}
	}
}

console.log(getIndex([2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21], 43));
console.log(getIndex([-16,-7,-3,-2,-1,0,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23], -3));