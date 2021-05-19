/* [2][fe-11] Найти первое число, которое нарушает последовательность. Создать массив, и вернуть первое число, которое
выбивается из последовательности. Если такого числа нет - возвращаем null. */

let getOutOfSequenceElement = ( array ) => {
	let elements = [];
	for(let j = 0, i = array[0]; j < array.length; i++, j++){
		if (array[j] !== i) {
			elements.push(array[j]);
			i++;
		}
	}
	if(elements.length === 1) elements = elements.join("");
	return elements.length ? elements : null;
};

console.log(getOutOfSequenceElement([1, 2, 3, 4, 6, 7, 8]));
console.log(getOutOfSequenceElement([4, 5, 6, 7, 8, 10, 11, 14]));
console.log(getOutOfSequenceElement([2, 3, 4]));





/* [3][fe-12] Пишем функцию, которая принимает любое количество строк и Возвращает аббревиатуру из слов. Если в
переданной строке есть пробелы, каждое слово в строке тоже должно возвращать аббревиатуру. */

let getAbbreviation = ( array ) => {
	let results = [];
	for(let element of array){
		element.trim();
		results.push(element[0].toUpperCase());
		for(let i = 0; i < element.length; i++){
			if(element[i] === " ") results.push(element[i+1].toUpperCase());
		}
	}
	return results.join(".");
};

console.log(getAbbreviation(['Sam', 'Houser']));
console.log(getAbbreviation(['Teach Me Skills', 'The best IT school']));





/* [3][fe-13] Пишем функцию, в которую приходит строка, с произвольным количеством открывающих и закрывающих скобок.
На выходе функция должна возвращать true - если все скобки закрыты, или false - если нет. */

let bracketValidation = ( string ) => {
	let openBracket = 0;
	let closeBracket = 0;
	for(let i =0; i < string.length; i++){
		if(string[i] === "(" ) openBracket += 1;
		if(string[i] === ")" ) closeBracket +=1;
	}
	return openBracket === closeBracket;
};

console.log(bracketValidation('(2 + 2) * 2'));
console.log(bracketValidation('7 + (76 * (23 - 9)'));





/* [2][fe-14] Выбрать из массива числа без повторений. Добавить к задаче ещё условие, чтобы возвращались не только
уникальные числа, но и простые */

let uniquePrimes = ( array ) => {
	let result = [];
	for(let elem of array){
		let repeat = 0;
		for(let element of array){
			if(elem === element) repeat += 1;
		}
		if(repeat <= 1) result.push(elem);
	}
	//проверка на простое число
	let resultPrime = [];
	for(let elem of result){
		let divisors = 0;
		for(i = 1; i < 10; i++){
			if(elem % i === 0) divisors +=1;
		}
		if(elem <= 9 && divisors === 2) resultPrime.push(elem);
		if(elem > 9 && divisors === 1) resultPrime.push(elem);
	}
	return resultPrime;
};

console.log(uniquePrimes([1, 1, 2, 3, 4, 6, 8, 8, 9, 14, 15]));