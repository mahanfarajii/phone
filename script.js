$(document).ready(function(){


    $(".fa-eye").click(function(){
        $(".pass").attr("type","text");
        $(".fa-eye").hide();
        $(".fa-eye-slash").show();
    })


    $(".fa-eye-slash").click(function(){
        $(".pass").attr("type","password");
        $(".fa-eye").show();
        $(".fa-eye-slash").hide();
    })


 
    $(".moon").click(function(){
        $("body").attr("background-color","black");
        $(".moon").hide(1000);
        $(".sun").show(1000);
    })

    $(".sun").click(function(){
        $("body").attr("background-color","white");
        $(".moon").show(1000);
        $(".sun").hide(1000);
    })






    $(".moon").click(function(){
        $("body").css("background-color","#121212")
        $("body").css("color","white")
        
    })

    $(".sun").click(function(){
        $("body").css("background-color","white")
        $("body").css("color","black")
        
    })




    $(".moon").click(function(){
        $("nav").css("background-color","#121212")
        $("nav").css("color","white")
        
    })

    $(".sun").click(function(){
        $("nav").css("background-color","white")
        $("nav").css("color","black")
        
    })




   
        $(".owl-carousel").owlCarousel({
            items:3,
            responsive:{
                0:{items:2},
                500:{items:2},
                700:{items:3},
            },
            loop:true,
            autoplay:true,
            autoplayTimeout:2000,
            autoplayHoverPause:true,
            dots:false,
            nav:true,
        
        });



      
       

       


        
      });
     


     
   let slide=document.querySelectorAll(".slide");
let n=0,i;

function next_pic(){
    for(i=0;i<slide.length;i++){
        slide[i].style.display="none";
    }
    n++
    if(n==slide.length){n=0;}
    slide[n].style.display="block";
}
setInterval(next_pic,6000);

function previous_pic(){
for(i=0;i<slide.length;i++){
    slide[i].style.display="none";
}

n--;
if(n<0){n=slide.length-1}
slide[n].style.display="block";
}




