// window.mySwipe = new Swipe(document.getElementById('slider'), {
//   startSlide: 2,
//   speed: 400,
//   auto: 3000,
//   continuous: true,
//   disableScroll: false,
//   stopPropagation: false,
//   callback: function(index, elem,) {},
//   transitionEnd: function(index, elem) {}
// });

if($('body').hasClass('home')){

  var slider =
  Swipe(document.getElementById('slider'), {
    auto: 5000,
    continuous: true,
    callback: function(pos) {

      var i = bullets.length;
      while (i--) {
        bullets[i].className = ' ';
      }
      bullets[pos].className = 'on';

    }
  });

var bullets = document.getElementById('position').getElementsByTagName('li');


}


$(document).ready(function(){
  $("#accordian h4").click(function(){
    $("#accordian ul ul").slideUp();
    //slide down the link list below the h3 clicked - only if its closed
    if(!$(this).next().is(":visible"))
    {
      $(this).next().slideDown();
    }
  });
});
