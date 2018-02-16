$(function() {
  var tooltip  = $('<div class="tooltip">');
  $('body').append(tooltip);
  var link = $('a[title]');

  link.mouseenter(function(e) {
    // Убираем стандартный title , записываем его значение во временный атрибут
    var title = $(this).attr("title");
    $(this).attr("tmp_title", title);
    $(this).attr("title","");
    tooltip.text(title).show();
  });

  link.mouseout(function(e) {
    tooltip.hide();
    var title = $(this).attr("tmp_title");

    // Возвращаем title на место и удаляем временный атрибут
    $(this).attr("title", title);
    $(this).removeAttr('tmp_title');
  });

  link.mousemove(function(e) {
    var xCoord = e.clientX;
    var yCoord = e.clientY;
    var yElement = yCoord - 30;
    tooltip.css({
      'top' : yElement,
      'left': xCoord
    });
  });

});
