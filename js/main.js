const $modal = document.querySelector('.modal');
const $table = document.querySelector('.table');
const $error = $modal.querySelector('.error');
const data = [
	{
	firstName: 'Ashton',
	lastName: 'Kutcher',
	age: 40
	}, {
	firstName: 'Bradley',
	lastName: 'Pitt',
	age: 54
	}, {
	firstName: 'Hannah',
	lastName: 'Dakota',
	age: 24
	}
];

renderTable(data);
document.addEventListener('click', function ( event ) {
	if(event.target.classList.contains('add-user')) {
		addClassActive($modal);
	} 
	if(event.target.classList.contains('modal') || event.target.classList.contains('close')) {
		removeClassActive($modal);
		clearElementsValue('input');
	}
	if(event.target.classList.contains('ok')) {
		if(addUser(data)){
			renderTable(data);
			clearElementsValue('input');
			removeClassActive($modal);
		} 
	}  
});






function addClassActive ( node ) {
	node.classList.add('active');
}

function removeClassActive ( node ) {
	node.classList.remove('active');
}

function clearElementsValue ( query ) {
	document.querySelectorAll(query).forEach( item => {
		item.value = "";
	});
	removeClassActive($error);
}

function renderTable ( arrayOfUsers ) {
	let table = `<tr class="header">
						<th>firstName</th>
						<th>lastName</th>
						<th>age</th>
					</tr>`
	for(let user of arrayOfUsers){
		table += `<tr class="header">
						<td>${user.firstName}</td>
						<td>${user.lastName}</td>
						<td>${user.age}</td>
					</tr>`
	}
	$table.innerHTML = table;
}

function addUser ( arrayOfUsers ) {
	const $firstNameInput = $modal.querySelector('input[name|=first-name]');
	const $lastNameInput = $modal.querySelector('input[name|=last-name]');
	const $age = $modal.querySelector('input[name = age]');
	if($firstNameInput.value.trim() && $lastNameInput.value.trim() && $age.value.trim()){
		arrayOfUsers.push({
			firstName : $firstNameInput.value,
			lastName : $lastNameInput.value,
			age : $age.value
		})
		return true;
	} else {
		addClassActive($error);
		return false;
	}
}
