

var flag = true;

if(flag) {
    checkItem('sidebar-item');     
} else {
    setActiveElement('sidebar-item');    
}

function checkItem(element){
    var list = document.getElementsByClassName(element);

    if(list) {
        for (i = 0; i < list.length; i++) {
            list[i].addEventListener('click', function(e) {
                this.classList.toggle("active");
            });
        }    
    }
    
}

function setActiveElement(element) {
    var list = document.getElementsByClassName(element);
    if(list) {
        for (var i = 0; i < list.length; i++) {
          list[i].addEventListener("click", function() {
            var currentElement = document.getElementsByClassName("active");
            currentElement[0].className = currentElement[0].className.replace(" active", "");
            this.className += " active";
          });
        }    
    } 
}
