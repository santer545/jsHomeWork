checkItem('sidebar-item');

function checkItem(element, flag) {

    var active = true;
    flag = active;
    var list = document.getElementsByClassName(element);

    for (i = 0; i <= list.length - 1; i++) {
        if (flag) {
            list[i].addEventListener('click', function(e) {
                this.classList.add("active");
            });
        } else {
            list[i].addEventListener('click', function(e) {
                this.classList.toggle("active");
            });
        }
    }
}

/*function activeItem(element) {
	var list = document.getElementsByClassName(element);
	for(i = 0; i <= list.length - 1; i++) {
		list[i].addEventListener('click', function(e) {
			list[i].classList.remove("active");
			this.classList.add("active");
		});
	}
}*/