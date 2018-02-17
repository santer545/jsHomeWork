$(function() {
  var accordion = $('#accordion');
  var allChildren = $('#accordion ul');
  allChildren.css('display', 'none');

  accordion.click(function(e) {
    var button = e.target;
    var subItem = $(button).siblings('ul');
    var depth = $(subItem).parents().length;


    var allAtDepth = $("#accordion ul").filter(function() {
      if($(this).parents().length >= depth && this !== subItem.get(0)) {
        return true;
      }
    });

    $(allAtDepth).slideUp("fast");

    //slideToggle для скрыть/показать текущий контент
    subItem.slideToggle("fast");
  });
});
