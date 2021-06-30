function server ( url ) {
	return fetch(url).then( data => data.json());
}

async function init ( page = 1, perPage = 6 ) {
	const users = await server(`https://reqres.in/api/users?page=${page}&per_page=${perPage}`);
	renderTable(users.data);
	renderNavigation(users.total_pages, page);
}

function renderTable ( usersData ) {
	const $table = document.querySelector('.table__body');
	$table.innerHTML = usersData.reduce((result, elem) =>{
		return  result += `<tr data-id=${elem.id} class="user">
						<td>${elem.id}</td>
						<td>${elem.email}</td>
						<td>${elem.first_name}</td>
						<td>${elem.last_name}</td>
						<td><img class="avatar" src='${elem.avatar}'></td>
					</tr>`;
	},"");
}

function renderNavigation ( totalPages, activePage ) {
	const $pages = document.querySelector('.pages');
	$pages.innerHTML = "";
	for(i = 0; i < totalPages; i++){
		$pages.innerHTML += (i === activePage-1) ? `<span class="active">${i + 1}</span>` : `<span>${i + 1}</span>`;
	}
}

document.addEventListener("change", event => {
	const $select = document.querySelector('.select');
	if(event.target == $select){
		init(1, $select.value); init(1, $select.value);
		setLocalStorage({"page": 1, "perPage": $select.value});
	}
});
document.addEventListener("click", event => {
	if(event.target.closest('.pages')){
		const page = event.target.innerText;
		const perPage = document.querySelector('.select').value;
		init(page, perPage);
		setLocalStorage({"page": page, "perPage": perPage});
	} 
});

(function localStorageInit () {
	if(localStorage.getItem("settings")){
		const settings = JSON.parse(localStorage.getItem("settings"));
		init(settings.page, settings.perPage);
		setSelectValue(parseInt(settings.perPage));
	} else init();
})();

function setLocalStorage ( obj ) {
	localStorage.setItem("settings", JSON.stringify(obj));
}

function setSelectValue ( perPage ) {
	const $options = document.querySelectorAll('option');
	$options.forEach(elem => elem.selected = false);
	if(perPage === 2) $options[0].selected = true;
	if(perPage === 4) $options[1].selected = true;
	if(perPage === 6) $options[2].selected = true;
}

function showUserInfo ( userData ) {
	const $info = document.querySelector('.info');
	$info.innerHTML = `<img src="${userData.avatar}" class="info__avatar"></img>
							<div class="info__data">
								<div class="info__name">${userData.first_name} ${userData.last_name}</div>
								<div class="info__data-email">${userData.email}</div>
							</div>`;
	$info.classList.remove('hidden');
}
async function renderUserInfo ( target ) {
	const id = target.closest('.user').dataset.id;
	const user = await server(`https://reqres.in/api/users/${id}`);
	showUserInfo(user.data);
}

document.addEventListener("click", event => {
	const $avatars = document.querySelectorAll('.avatar');
	$avatars.forEach(avatar => {
		if(event.target === avatar) renderUserInfo(event.target);
	});
});