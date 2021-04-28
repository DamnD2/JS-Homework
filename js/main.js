let mass = [];

// заполняет массив случайными числами от 0 до 10, которые не повторяются
let fillArray = (amount, array) => {
	for(i = 0; i < amount; i++){
		let randomNumber = Math.round(Math.random()*10);
		let same = false;
		for(j = 0; j < amount; j++){
			if(randomNumber === array[j]) {
				i -=1;
				same = true;
			}
		}
		if(!same) array.push(randomNumber);
	}
};

//сортирует массив
let sortArray = (array) => {

	let number = 0;
	for (i = 0; i < array.length; i++){
		for(j = 0; j < array.length; j++){
			if(array[j] > array[j+1]){
				number = array[j];
				array[j] = array[j+1];
				array[j+1] = number;
			} 
		}
		if(number === 0) break;
	}
	return array;
};

fillArray(7, mass);
console.log(mass);
sortArray(mass);
console.log(mass);