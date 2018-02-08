checkItem('sidebar-item');

function checkItem(element, flag) {

    var active = false;
    flag = active;
    var list = document.getElementsByClassName(element);

    for (i = 0; i <= list.length - 1; i++) {
        if (flag) {
            list[i].addEventListener('click', function(e) {
                e.target.classList.add("active");
            });
        } else {
            list[i].addEventListener('click', function(e) {
                console.log(list)
                this.classList.toggle("active");
            });
        }
    }
}

