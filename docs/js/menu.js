jQuery(function($){
  $('.menu-btn').on('click', function(){
    $('.menu').toggleClass('is-active');
    $('.fa-bars').toggleClass('none');
    $('.fa-times').toggleClass('unnone');
  });
});