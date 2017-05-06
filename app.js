var main = function() {
  $('.notification').on('click', function() {
    $('ul.notification-menu').toggle();
    alert('toggled');
 
    });
   $('.btn').on('click', function() {
  //    $button = $('div.post').find('.btn');
   //   alert('found');
      $(this).css("background-color", "red");
      $(this).toggleClass('.btn-like');
      alert('red'); 
	});
};

$(document).ready(main);