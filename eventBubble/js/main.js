setActiveElement('menu', 'sidebar__item');

function toggleActiveElement(element) {
    var menu = document.getElementById(element);

    menu.addEventListener('click', function(e) {
        e.target.parentElement.classList.toggle('active');
    });
}

function setActiveElement(element, item) {
	var menu = document.getElementById(element);

	menu.addEventListener('click', function(e) {
		var activeElement = document.getElementsByClassName(item);
		for(var i = 0; i < activeElement.length; i++) {
			activeElement[i].classList.remove('active');
		}
		e.target.parentElement.classList.add('active');
	});
}