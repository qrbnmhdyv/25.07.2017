$("li a").click(function(event){
  event.preventDefault()
  $("nav").css("background","#1E7A46")
  var elem=$("#"+$(this).attr("name"))
$(window).scrollTop(elem.offset().top)

console.log(elem.offset().top)
  
})
$(window).on("scroll",function(){
  var count=$(this).scrollTop();
  $("#nav").css({
    background:"rgba(30, 122, 70,"+count/250+" )"
  })
 
  
})
