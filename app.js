$(document).ready(function () {
        $('.testiSlide').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        responsive: [{
        breakpoint: 850,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        }
        }]
        });
       });


//   Top to bottom     

       var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});