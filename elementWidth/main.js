elementWidthAnimate('element-1', '200', '1000');


// Передаем 3 параметра (id элемента, ширина, время анимации)
function elementWidthAnimate(element, width, time) {
    if (element && width && time) {
        currentElement = document.getElementById(element);
        animate({
            duration: time,
            timing: function(timeFraction) {
                return timeFraction;
            },
            draw: function(progress) {
                currentElement.style.width = progress * width + 'px';
            }
        });
    } else {
    	alert('Передайте параметры анимирования элемента!');
    }
}

// функция анимации , основана на requestAnimationFrame(нагуглил :) )
function animate(options) {
    var start = performance.now();
    requestAnimationFrame(function animate(time) {
        var timeFraction = (time - start) / options.duration;
        if (timeFraction > 1) timeFraction = 1;

        var progress = options.timing(timeFraction)

        options.draw(progress);

        if (timeFraction < 1) {
            requestAnimationFrame(animate);
        }
    });
}