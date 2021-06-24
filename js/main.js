const hourses = ["Hourse 1", "Hourse 2", "Hourse 3", "Hourse 4", "Hourse 5"];

function getRandomTime ( max ) {
	return Math.round(Math.random()*max);
}

function getHourse ( name, time) {
		return new Promise( resolve => {
			setTimeout( () =>{
				resolve({name, time});
			}, time*1000);
		});
}

hourses.forEach(elem =>{
	getHourse(elem, getRandomTime(5)).then( data => {
		console.log(`${data.name} финишировал за ${data.time} секунд`);
	});
});
