
$(window).ready(function() {
$("#a").click(function(){
    $("body").animate({
      scrollTop:0
      }, 1000); 
    $("#ulnav2").hide()
});

$("#about1,#about2,#btn").click(function(){
    $("body").animate({
      scrollTop:700
      }, 1000); 
    $("#ulnav2").hide()
});

$("#services1,#services2,#btn2").click(function(){
    $("body").animate({
      scrollTop:1470
      }, 1000); 
    $("#ulnav2").hide()
});

$("#gallery1,#gallery2").click(function(){
    $("body").animate({
      scrollTop:2700
      }, 1000); 
    $("#ulnav2").hide()
});


$("test1").click(function(){
    $("body").animate({
      scrollTop:3000
      }, 1000); 
    $("#ulnav2").hide()
});
});

$(window).on("scroll",function(){
  var count=$(this).scrollTop();
  console.log(count/250)
  $("#nav").css({
    background:"rgba(30, 122, 70,"+count/250+" )"
  })
 
  
})
$(window).on("scroll",function(){
  var count=$(this).scrollTop();
  console.log(count/250)
  console.log($(this).scrollTop())
  $("#ulnav2").css({
    background:"rgba(30, 122, 70,"+count/250+" )"  
  }) 
})
$("#ulnav2").hide()
$(".btns").click(function(){
  event.preventDefault()
  $("#ulnav2").toggle(500);
  
})
