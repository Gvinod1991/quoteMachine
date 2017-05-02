
function getQutes()
{
  $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&jsonp=?&lang=en", function(response) {
   $("#quote").html(response.quoteText
  );
    $("#author").html( '&ndash;&nbsp;'+ response.quoteAuthor );
    var que = "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text= " + response.quoteText +"-"+ response.quoteAuthor ;
    $("#tweet").attr("href", que) ;
});
}
getQutes();//on document load

var arr=['#41ab6b','#f06060','#5DADE2','#BB8FCE','#73a857','#DC7633'];
var aniArr=['zoomIn','shake','flip','bounceIn','rubberBand']
$("#get").on("click",function(){
  
  //$(".big-box").removeClass("zoomIn"); 
  //on buton click
  getQutes();
  var col=arr[Math.floor(Math.random() * arr.length)];
  var x=aniArr[Math.floor(Math.random() * aniArr.length)];
  
  $("#big-box").css("background",col);
  $(".circle").css("color",col);
  
  $("#big-box").removeClass().addClass( x + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      $(this).removeClass();
    
    });//to add or remove animation
});

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip(); 
});


