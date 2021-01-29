jQuery('document').ready(function($){
  
    $(".cool-timeline-horizontal").find("a[class^='ctl_prettyPhoto']").prettyPhoto({
        social_tools: false,
        show_title:false,
       }); 
     //  initialize();  
    $("ul.ctl_minimal_cont").find("a[ref^='prettyPhoto']").prettyPhoto({
        social_tools: false,
        show_title:false,
        changepicturecallback: function(){ initialize(); },
        callback: function(){unInitialize()},
       }); 
      
var nextBtn='<div class="clt_h_nav_btn ctl-slick-next"><i class="fa fa-angle-right"></i></div>';
var preBtn='<div class="clt_h_nav_btn ctl-slick-prev"><i class="fa fa-angle-left"></i></div>';
$('.cool-timeline-horizontal').each(function(){
var slidetoshow=$(this).data('items');
var autoplay=$(this).data('autoplay');
var startOn=$(this).data('start-on');
var speed = parseInt($(this).data('autoplay-speed'));
   $(this).find('ul.ctl_minimal_cont').slick({
               dots: false,
               infinite: false,
               slidesToShow:slidetoshow,
               autoplay: autoplay,
               autoplaySpeed:speed,
               initialSlide:startOn,
               slidesToScroll:1,
               nextArrow:nextBtn,
               prevArrow:preBtn,
               responsive: [
                 {
                   breakpoint: 600,
                   settings: {
                     slidesToShow: 2,
                     slidesToScroll: 1
                   }
                 },
                 {
                   breakpoint: 480,
                   settings: {
                     slidesToShow: 1,
                     slidesToScroll: 1
                   }
                 }
               ]
               });

           });

     
        
        function initialize(){
        $(".ctl_popup_slick .slides").each(function(){
          var autoplaySpeed=parseInt($(this).data('animationspeed'));
          var slideshow=$(this).data('slideshow');
          var animation=$(this).data('animation');
          $(this).slick({
              dots: false,
              infinite: false,
              slidesToShow:1,
              autoplay:slideshow,
              autoplaySpeed:autoplaySpeed,
               adaptiveHeight: true
            });      
          }); 
        }
        function unInitialize(){
          $(".ctl_popup_slick .slides").each(function(){
            $(this).slick('unslick');      
          }); 
      
          }
});
