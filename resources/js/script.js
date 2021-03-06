$(document).ready(function(){
    /*----------for sticky nav------*/
    

    $('.js--section-features').waypoint(function(direction){
        if(direction=="down"){
            $('nav').addClass('sticky');
        }else{
          $('nav').removeClass('sticky');
        }
        },{
        offset: '60px'


    });

   $('.js--scroll-to-plan').click(function(){
       $('html , body').animate({scrollTop: $('.js--section-time').offset().top}, 1000);

   });
   $('.js--scroll-to-start').click(function(){
    $('html , body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);

});
/*--------navigation scroll--------*/
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
/*------Animations on scroll------*/
$('.js--wp-1').waypoint(function(direction){
    $('.js--wp-1').addClass('animated fadeIn');
}, {
offset: '50%' 

}); 
/* mobile nav */
$('.js-nav-icon').click(function(){
  var nav= $('.js--main-nav');
  var icon=$('.js-nav-icon i');
  nav.slideToggle(200);//we want in 200ms
  if(icon.hasClass('ion-navicon-round')){
    icon.addClass('ion-close-round ');
    icon.removeClass('ion-navicon-round');
  }else{
    icon.addClass('ion-navicon-round ');
    icon.removeClass('ion-close-round');

  }

 
});
  var map = new GMaps({
    div: '.map',
    lat: -12.043333,
    lng: -77.028333
    
  });
  map.addMarker({
    lat: -12.043333,
    lng: -77.028333,
    title: 'Lima',
    infoWindow: {
      content: '<p>HTML Content</p>'
    }
  });
  
});