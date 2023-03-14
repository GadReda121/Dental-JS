$(document).ready(function(){
   
    // menu mob
   $(".fa-bars").click(function(){
       $(".header .menu-mob").slideToggle(2000);
       $(".fa-bars").css("display","none");
       $(".fa-xmark").css("display","inline-block");
   });
   $(".fa-xmark").click(function(){
       $(".header .menu-mob").slideToggle(2000);
       $(".fa-bars").css("display","inline-block");
       $(".fa-xmark").css("display","none");
   });
   $(".menu-mob nav ul li a").click(function(){
       $(".header .menu-mob").slideUp(2000);
       $(".fa-bars").css("display","inline-block");
       $(".fa-xmark").css("display","none");
   });
 
   // scroll
   $(window).scroll(function(){
       if ( this.scrollY > 20 ){
            $(".header").css("backgroundColor","#17a2b8");
            $(".header .logo h3 a span").css("color","#f9f8fa");
            $(".header .logo h3 a span i").css("color","#f9f8fa");
            $(".tools a").css("box-shadow","rgba(0,0,0,.1) 0px 0px 0px 3px");
            $(".header .menu nav ul li a").css("color","#f9f8fa");
       } else{
           $(".header").css("backgroundColor","#f9f8fa");
           $(".header .logo h3 a span").css("color","#17a2b8");
           $(".header .logo h3 a span i").css("color","#17a2b8");
           $(".tools a").css("box-shadow","rgba(0,0,0,.1) 0px 0px 0px 0px");
           $(".header .menu nav ul li a").css("color","#17a2b8");
       }
   });

   // hover
   $(".service-child1").hover(function(){
    $(".service-child1 .fa-solid").css("color","#f9f8fa");
    $(".service-child1 h1").css("color","#f9f8fa");
   },function(){
    $(".service-child1 .fa-solid").css("color","#17a2b8");
    $(".service-child1 h1").css("color","#17a2b8")
   });
//    2
   $(".service-child2").hover(function(){
    $(".service-child2 .fa-solid").css("color","#f9f8fa");
    $(".service-child2 h1").css("color","#f9f8fa");
   },function(){
    $(".service-child2 .fa-solid").css("color","#17a2b8");
    $(".service-child2 h1").css("color","#17a2b8")
   });
//    3
   $(".service-child3").hover(function(){
    $(".service-child3 .fa-solid").css("color","#f9f8fa");
    $(".service-child3 h1").css("color","#f9f8fa");
   },function(){
    $(".service-child3 .fa-solid").css("color","#17a2b8");
    $(".service-child3 h1").css("color","#17a2b8")
   });
//    4
   $(".service-child4").hover(function(){
    $(".service-child4 .fa-solid").css("color","#f9f8fa");
    $(".service-child4 h1").css("color","#f9f8fa");
   },function(){
    $(".service-child4 .fa-solid").css("color","#17a2b8");
    $(".service-child4 h1").css("color","#17a2b8")
   });
//    5
   $(".service-child5").hover(function(){
    $(".service-child5 .fa-solid").css("color","#f9f8fa");
    $(".service-child5 h1").css("color","#f9f8fa");
   },function(){
    $(".service-child5 .fa-solid").css("color","#17a2b8");
    $(".service-child5 h1").css("color","#17a2b8")
   });
//    6
   $(".service-child6").hover(function(){
    $(".service-child6 .fa-solid").css("color","#f9f8fa");
    $(".service-child6 h1").css("color","#f9f8fa");
   },function(){
    $(".service-child6 .fa-solid").css("color","#17a2b8");
    $(".service-child6 h1").css("color","#17a2b8")
   });

//    work
    $("work1").hover(function(){
        this.css("transform","translateY(-10px)")
    },function(){});
});