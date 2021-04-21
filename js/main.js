let adultUsers = [];
let underageUsers = [];

let users = [
	{
		name: 'Ivan',
		age: 18,
	},
	{
		name: 'Petr',
		age: 12
	},
	{
		name: 'Vasya',
		age: 34,
	},
	{
		name: 'Egor',
		age: 8,
	},
	{
		name: 'Dasha',
		age: 17,
	},
	{
		name: 'Masha',
		age: 28,
	}
];

for(let i in users){
	if(users[i].age >= 18){
		adultUsers.push(users[i]);
	} else{
		underageUsers.push(users[i]);
	}
}