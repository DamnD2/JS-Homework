// выводит в консоль случайную цифру и каждую секунду увеличивает ее на 1 до 60!
let showRandomNumber = () => {
	let randomNumber = Math.round(Math.random()*10);
	console.log(randomNumber);
	let timer = setInterval(() => {
		randomNumber +=1;
		console.log(randomNumber);
		if(randomNumber === 60) {
			clearInterval(timer);
			console.log('Прошла минута!');
		}
	}, 100); // 100 вместо 1000 что бы не ждать миллион лет завершения кода :)
	
};
showRandomNumber();

