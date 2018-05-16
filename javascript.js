
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var slides = $(".mySlides");
  var dots = $(".dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
slides.map((val,element)=>{$(element).hide()});
dots.map((val,element)=>{$(element).removeClass('active')});

  $(slides[slideIndex-1]).show(); 
  $(dots[slideIndex-1]).addClass('active') 
}

$("#imagegallery").touchwipe({
     wipeLeft: function() {   plusSlides(1)},
     wipeRight: function() { plusSlides(-1) },
     min_move_x: 20,
     min_move_y: 20,
     preventDefaultEvents: true
});