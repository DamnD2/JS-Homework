/* Написать функцию, которая будет высчитывать сумму чисел от нуля, до параметра, который мы в неё передаем,
например: getSum(100) должна передавать сумму чисел от 0 до 100 (должно получится 5050) */

let calcSumm = (number) => {
	let summ = 0;
	for(i = 0; i <= number; i++){
		summ += i;
	}
	return summ;
};
console.log(calcSumm(100));







// Дана строка. Сделайте заглавным первый символ каждого слова этой строки.

let transofmFirstLetter = (string) => {
	let arrayWords = string.split(" ");
	for(i = 0; i < arrayWords.length; i++){
		arrayWords[i] = arrayWords[i].slice(0, 1).toUpperCase() + arrayWords[i].slice(1, arrayWords[i].length);
	}
	return arrayWords.join(" ");
};
console.log(transofmFirstLetter("Lorem ipsum dolor sit amet, consectetur adipiscing elit."));







/* Дана строка с пробелами по краям. Реализуйте функцию ltrim, которая будет убирать пробелы слева.
Реализуйте функцию rtrim, которая будет убирать пробелы справа. Реализуйте функцию trim, которая будет
убирать пробелы по концам строки. */

let leftTrim = (string) => {
	let numberOfSpaces = 0;
	for(i = 0; i < string.length; i++){
		if(string[i] === " "){
			numberOfSpaces += 1;
		} else break;
	}
	return string.slice(numberOfSpaces);
};

let rightTrim = (string) => {
	let numberOfSpaces = 0;
	for(i = string.length - 1; i >= 0; i--){
		if(string[i] === " "){
			numberOfSpaces += 1;
		} else break;
	}
	return string.slice(0, string.length - numberOfSpaces);
};

let trim = (string) => {
	return rightTrim(leftTrim(string));
};
console.log(leftTrim("          string"));
console.log(rightTrim("string          "));
console.log(trim("          string          "));







/* Написать функцию, которая принимает параметрами два массива и сливает их в объект так, что элементы первого
массива становятся ключами, а второго - значениями. */

let mergeArraysIntoObject = (firstArray, secondArray) => {
	let obj = { };
	for(i = 0; i < firstArray.length; i++){
		if(typeof(secondArray[i]) != "undefined"){
			obj[firstArray[i]] = secondArray[i];
		} else break;
	}
	return obj;
};
console.log(mergeArraysIntoObject(["name", "age", "language", "from", "address"], ["Bob", 32, "English"]));







/* Дан массив вида [1, 2, 3, 4, 5, 6, 7, 8, 9]. Сделайте функцию, которая будет разбивать его в двухмерный массив.
Первым параметром функция принимает массив для разбиения, а вторым - сколько элементов должно быть в подмассиве. */

let splitArray = (array, quantity) => {
	let newArray = [];
	let quantitySubArrays = array.length / quantity;
	for(i = 0; i < quantitySubArrays; i++){
		let subArray = array.slice(i*quantity, i*quantity + quantity);
		newArray.push(subArray);
		/* newArray.push(array.slice(i*quantity, i*quantity + quantity)); */
	}
	return newArray;
};

console.log(splitArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 3));







/* Арифметический тренажер: пользователю выводится 10 примеров, которые содержат по 2 случайных положительных числа 
(от 1 до 10) и знак сложения или вычитания (рандомных); пользователь вводит ответы; после 10 ответов выводится оценка
и примеры, в которых была совершена ошибка (правильный ответ Х, а вы ввели У). Добавить в логику умножение и деление.
При делении первый операнд должен быть от 1 до 100. */

//функция принимает количество примеров, которое должно быть выведено (quantity)
let arithmeticSimulator = (quantity) => {
	let arithmeticExpressions = {};

	//цикл заполняет объект arithmeticExpressions таким образом, что выражение является ключём, а результат значением
	for(i = 0; i < quantity; i++){
		let a = Math.round(Math.random()*10); // 1-10;
		let b = Math.round(Math.random()*10); // 1-10;
		let aDivision = Math.round(Math.random()*100); // 1-100;
		let expression = "";
		let expressionValue = 0;
		let operations = (Math.random() - 0.5)*2; //[-1, -0.5)-"division"  [-0.5, 0)-"minus"  [0, 0.5)-"plus"  [0.5, 1)-"multiply"
		if(operations >= -1 && operations < -0.5){
			expression += aDivision + " / " + b;
			if(b === 0){
				i -= 1;
				continue;
			} else {
				expressionValue = Math.round((aDivision / b)); //округляет результат деления до целого числа
			}
		} else if (operations >= -0.5 && operations < 0){
			expression += a + " - " + b;
			expressionValue = a - b;
		} else if (operations >= 0 && operations < 0.5){
			expression += a + " + " + b;
			expressionValue = a + b;
		} else if (operations >= 0.5 && operations < 1){
			expression += a + " * " + b;
			expressionValue = a * b;
		}
		arithmeticExpressions[expression] = expressionValue;
	}
	console.log(arithmeticExpressions);

	//в переменнную allExpressions записываем все ключи(математическе выражения) в виде, котором они будут выведены пользователю
	let allExpressions = "";
	let keys = Object.keys(arithmeticExpressions);
	for(i = 0; i < quantity; i++){
		allExpressions += `${i+1}.  ${keys[i]}\n`;
	}
	let userKeysString = prompt(`Случайным образом сгенерированы ${quantity} математических выражений:\n${allExpressions}Введите ответы через запятую(без пробелов). В выражениях с делением округлите результат до целого по правилам округления. Удачи!`);

	//сверяем ответы пользователя со значениями объекта и записываем результаты в results
	let userKeysArray = userKeysString.split(",");
	let results = "";
	let trueResults = 0;
	for(i = 0; i < quantity; i++){
		if(parseInt(userKeysArray[i]) === arithmeticExpressions[keys[i]]){
			results += `${i+1}. ${keys[i]} = ${arithmeticExpressions[keys[i]]} Верно!\n`;
			trueResults += 1;
		} else {
			results += `${i+1}. ${keys[i]} = ${arithmeticExpressions[keys[i]]} Неверно! Вы ввели ${userKeysArray[i]} \n`;
		}
	}

	//даём рекомендации пользователю исходя из его ответов
	let recomendation = "";
	let recomendationPointFirst = Math.round(quantity*0.3); // 30% от заданных вопросов
	let recomendationPointSecond = Math.round(quantity*0.7); // 70% от заданных вопросов
	if(trueResults <= recomendationPointFirst){
		recomendation = "Плохо! У вас слабое знание математики!)";
	} else if(trueResults > recomendationPointFirst && trueResults <= recomendationPointSecond){
		recomendation = "Не плохо! У вас средние знания математики!)";
	} else if(trueResults > recomendationPointSecond){
		recomendation = "Отлично! У вас хорошие знания математики!)";
	}
	alert(`${results}Вы ответили правильно на ${trueResults} из ${quantity} вопросов.\n${recomendation}`);
};
arithmeticSimulator(10);	
