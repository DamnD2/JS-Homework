let userLastName = prompt("Enter your last name");
let searchResult = false;

var data = [
	{
		firstName: 'Ashton',
		lastName: 'Kutcher',
		age: 40
	},
	{
		firstName: 'Bradley',
		lastName: 'Pitt',
		age: 54
	},
	{
		firstName: 'Hannah',
		lastName: 'Dakota',
		age: 24
	}
];

for(let i = 0; i < data.length; i++) {
	if (data[i].lastName.toLowerCase() === userLastName.toLowerCase()){
		alert(`User name: ${data[i].firstName} \nUser last name: ${data[i].lastName} \nUser age: ${data[i].age}`);
		searchResult = true;
	}
}

if(!searchResult){
	alert(`User "${userLastName}" is not found`);
}
	