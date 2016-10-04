var place = function(e){
  var dot = $('.dot').first().clone().css({
    "display":     "inline",
    "margin-top":  e.pageY - 16,
    "margin-left": e.pageX - 16
  });
  dot.appendTo('body');
};

$(document).ready(function(){
  $('body').click(function(e){
    place(e);
  });
});
