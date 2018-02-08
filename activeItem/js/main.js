var flag = true;

if(flag) {
    checkItem('sidebar-item');     
} else {
    setActiveElement('sidebar-item');    
}

<<<<<<< HEAD
    var active = false;
    flag = active;
    var list = document.getElementsByClassName(element);

    for (i = 0; i <= list.length - 1; i++) {
        if (flag) {
            list[i].addEventListener('click', function(e) {
                e.target.classList.add("active");
            });
        } else {
=======
function checkItem(element){
    var list = document.getElementsByClassName(element);

    if(list) {
        for (i = 0; i < list.length; i++) {
>>>>>>> aaf69a9b2470cd4eedba54febffec3c73db77b1f
            list[i].addEventListener('click', function(e) {
                console.log(list)
                this.classList.toggle("active");
            });
        }    
    }    
}

<<<<<<< HEAD
=======
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
>>>>>>> aaf69a9b2470cd4eedba54febffec3c73db77b1f
