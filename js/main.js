const $modal = document.querySelector('.modal');


document.addEventListener('click', function ( event ) {
	if(event.target.classList.contains('add-user')){
		addClassActive($modal);
	} 
	if(event.target.classList.contains('modal') || event.target.classList.contains('close')){
		removeClassActive($modal);
		clearElementsValue('input');
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
}