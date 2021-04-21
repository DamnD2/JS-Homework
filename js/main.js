let numbers = [10, 25, 100, "String 1", true, 0, 5, 15, "String 2"];
let sum = 0;

for(let i in numbers){
	if(typeof(numbers[i]) === "number"){
		sum += numbers[i];
	}
}
console.log(`Sum of array numbers: ${sum}`);