var toggle_menu = document.querySelector('.responsive-menu');
var menu = document.querySelector('.menu');
toggle_menu.onclick= function(){
     toggle_menu.classList.toggle('active');
     menu.classList.toggle('responsive')
}

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slideshow")[0].getElementsByTagName("img");
  for (i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex-1].classList.add("active");
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
document.getElementById("myForm").addEventListener("submit", function(event) {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  if (name == ""||  email == ""||  message == "") {
    alert("Veuillez remplir tous les champs !");
    event.preventDefault();
  }
});
