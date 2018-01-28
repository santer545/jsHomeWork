elementWidthAnimate('element-1', '200', '1000');

function elementWidthAnimate(element, width, time) {
	var currentElement = document.getElementById(element);
	console.log(currentElement);
	setTimeout(function() {
		currentElement.style.width = width + 'px';
	}, time);
}