

var flag = true;

if(flag) {
    checkItem('sidebar-item');     
} else {
    console.log('!!!');
    setActiveElement('sidebar-item');    
}

function checkItem(element){
    var list = document.getElementsByClassName(element);

    if(list.length) {
        for (i = 0; i < list.length; i++) {
            list[i].addEventListener('click', function(e) {
                this.classList.toggle("active");
            });
        }    
    }
    
}

function setActiveElement(element) {
    var list = document.getElementsByClassName(element);
    if(list.length) {
        for (var i = 0; i < list.length; i++) {
          list[i].addEventListener("click", function() {
            var currentElement = document.getElementsByClassName("active");
            currentElement[0].className = currentElement[0].className.replace(" active", "");
            this.className += " active";
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