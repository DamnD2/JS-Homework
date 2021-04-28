let mass = ["first", "second", "third", "fourth", "fiveth"];

//возвращает количество элементов массива
let getLengthArray = (array) => {
	return array.length;
};

//возвращает массив содержащий количество символов каждой строки
let getLengthArrayElements = (array) => {
	let newArray = [];
	for(i = 0; i < array.length; i++){
		newArray.push(array[i].length);
	}
	return newArray;
};

//конвертирует массив в строку, элементы в которой разделены запятыми
let convertArrayToString = (array) => {
	return array.join(', ');
};

console.log(getLengthArray(mass));
console.log(getLengthArrayElements(mass));
console.log(convertArrayToString(mass));