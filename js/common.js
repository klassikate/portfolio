//Preloader

$(window).on('load', function () {
    var $preloader = $('#preloader'),
        $picture   = $preloader.find('.picture');
    $picture.fadeOut();
    $preloader.delay(500).fadeOut('slow');
});


//Custom JS

$(document).ready(function() {
  //lightbox
  $('.gallery a').simpleLightbox({
    });
	//mmenu
      $("#my-menu").mmenu({
         // options
      }, {
         // configuration
         offCanvas: {
            pageNodetype: "section",
            pageSelector: ".content"
         }
      });

      //owl-carousel

       $('.owl-carousel').owlCarousel({
        items: 1,
        nav: true,
        loop: true,
        navSpeed: 1000,
        mouseDrag: false,
       });
       $('.btn-cont').on('click', function(){
        $('#contact').css({
          display: 'block'
        });
       });
       $('#exit').on('click', function(){
        $('#contact').css({
          display: 'none'
        });
       });


       $(window).scroll(function(){
    if ($(window).scrollTop()>500) {
      $("nav").addClass('header-scroll');

      $('.scroll-active').css('display','inline');
    }
    else{
      $("nav").removeClass('header-scroll');
      $('.scroll-active').css('display','none');
    }
  });
   });