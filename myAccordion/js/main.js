$(function() {
  var accordion = $('#accordion');
  var allChildren = $('#accordion ul');
  allChildren.css('display', 'none');

  accordion.click(function(e) {
    var button = e.target;
    var subItem = $(button).next();
    var depth = $(subItem).parents().length;


    var allAtDepth = $(allChildren).filter(function() {
      if($(this).parents().length >= depth && this !== subItem.get(0)) {
        return true;
      }
      console.log("Что это, " + this);
      console.log("И это " + subItem.get(0));
    });

    if($(e.target).is('.accordion-button')) {
      $(allAtDepth).slideUp("fast");

      //slideToggle для скрыть/показать текущий контент
      subItem.slideToggle("fast");
    }
  });
});
