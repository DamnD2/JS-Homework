let mass = [12, 31, 8, true, 11, "27", "string", null];

let calcSumm = (array) => {
	let summ = 0;
	for(i = 0; i < array.length; i++){
		if(typeof array[i] === "number"){
			summ += array[i];
		}
	}
	return summ;
};

console.log(calcSumm(mass));