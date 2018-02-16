$(function() {
  var tooltip  = $('<div class="tooltip">');
  $('body').append(tooltip);
  var link = $('a[title]');

  link.mouseenter(function(e) {
    var tooltipText = $(this).attr('title');
    tooltip.text(tooltipText).show();
  });

  link.mouseout(function(e) {
    tooltip.hide();
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
