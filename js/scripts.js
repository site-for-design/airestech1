$('#devices .devices-slider__wrap').slick({
   slidesToShow: 1,
   slidesToScroll: 1,
   arrows: true,
   autoplay: true,
   autoplaySpeed: 3000,
   prevArrow: '.devices-arrow.prev-arrow',
   nextArrow: '.devices-arrow.next-arrow'
  });

$('.structure-img__numbers .number').hover(function() {
  $('#' + $(this).data('id')).addClass('hover');
}, function() {
  $('#' + $(this).data('id')).removeClass('hover');
});
$('.structure-list__item').hover(function() {
  $('[data-id="'+$(this).attr('id')+'"]').addClass('hover');
}, function() {
  $('[data-id="'+$(this).attr('id')+'"]').removeClass('hover');
});

$('#how-work .video-wrap .video-start').click(function(){
$('#how-work .video-wrap .video video')[0].play();
})

$('.faqs-list__item .question').click(function(){
  $('.faqs-list__item .answer').not($(this).next()).slideUp('slow');
  $('.faqs-list__item .elem-condition').removeClass('active');
  $(this).siblings('.answer').slideDown('slow');
  $(this).children('.elem-condition').toggleClass('active');
});
$(".faqs-slider").slick({
dots: true,
customPaging : function(slider, i) {
var thumb = $(slider.$slides[i]).data();
return '<p>'+(i+1)+'</p>';
},
slidesToShow: 1,
slidesToScroll: 1,
swipe: false,
// speed: 500,
// fade: true,
// cssEase: 'linear',
prevArrow: '.faqs-arrow.prev-arrow',
nextArrow: '.faqs-arrow.next-arrow'
});
$(document).ready(function() {
   $(".plus").click(function(){
        var input = $(this).siblings(".amount-input");
          input[0].stepUp();
   });
   $(".minus").click(function(){
        var input = $(this).siblings(".amount-input");
          input[0].stepDown();
   });
});
$('#homepage-instagram .instagram-slider').slick({
    infinity: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    arrows: false,
  });
// burger-menu header
$(document).ready(function(){
  var button = $('.header .burder-btn');
  var form = $('.header .main-menu');
  var overlay = $('.overlay');
  var close = $('#popup-form .close');
  var body = $('body');

  button.click(function(){
    form.addClass("active");
    overlay.css("display", "block");
    body.css("overflow", "hidden");
  });
  close.click(function(){
    form.removeClass("active");
    overlay.css("display", "none");
    body.css("overflow", "scroll");
  });
  overlay.click(function(){
    form.removeClass("active")
    overlay.css("display", "none");
    body.css("overflow", "scroll");
  });
});