stopPropogate('sidebar', 'sidebar__item')

function stopPropogate(parentElement, parentChild) {
	var parent = document.getElementById(parentElement);
	var list = document.getElementsByClassName(parentChild);

	parent.addEventListener('click', function(e) {
		console.log('Click on parent element!');
	});
	for(i = 0; i < list.length; i++) {
		list[i].addEventListener('click', function(e) {
			e.stopPropagation();
			console.log('Click on child element!');
		});
	}
}
