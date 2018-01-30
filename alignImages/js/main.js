alignItems('images-item');

function alignItems(element) {
	var list = document.getElementsByClassName(element);
	for(i = 0; i <= list.length - 1; i++) {
		var listWidth,
			listHeight,
			img,
			imgWidth,
			imgHeight,
			imgMarginLeft,
			imgMarginTop;

		listWidth = list[i].offsetWidth;
		listHeight = list[i].offsetHeight;

		// получаем дочерний элемент (img)
		img = list[i].children[0];
		imgWidth = img.clientWidth;
		imgHeight = img.clientHeight;

		// центрируем дочерний элемент, зная его высоту и высоту родителя
		imgMarginLeft = (listWidth - imgWidth) / 2;
		imgMarginTop = (listHeight - imgHeight) / 2;

		img.style.marginLeft = imgMarginLeft + 'px';
		img.style.marginTop = imgMarginTop + 'px';
	}
}