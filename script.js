function init() {
  $("#proje").hide();
  $("#contact-form").hide();
  
}
init();

$("#about").click(function(event){
    event.preventDefault()
    $("#about-me").show();
    $("#proje").hide();
    $("#contact-form").hide();
   

})

$("#projects").click(function(event){
    event.preventDefault()
    $("#proje").show();
    $("#contact-form").hide();
    $("#about-me").hide();

})


$("#contacts").click(function(event){
    event.preventDefault()
    $("#contact-form").show();
    $("#about-me").hide();
    $("#proje").hide();
  

})
