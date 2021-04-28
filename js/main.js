let userWord = prompt(`Введите слово, что бы узнать, является ли оно полиндромом`).trim();

let reverseWord = function (word) {
	let newWord = "";
	for(i = word.length - 1; i >= 0; i--){
		newWord += word[i];
	}
	return newWord;
};

if(userWord === null || userWord === ""){
	alert(`Ввод был отменен либо вы не ввели слово`);
} else if(userWord === reverseWord(userWord)){
	alert(`Слово "${userWord}" является полиндромом!`);
} else {
	alert(`Слово "${userWord}" не является полиндромом!`);
}
