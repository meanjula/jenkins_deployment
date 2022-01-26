
const header = document.querySelector(".navBar");

// When the user scrolls down 100px from the top of the document, show the nav background
const scrollFunction = () => {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    header.classList.add("bg");
  } else {
    header.classList.remove("bg");
  }
};
// When the user clicks on the button, scroll to the top of the document
function topscrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
var mybutton = document.getElementById("myBtn");
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
mybutton.addEventListener('click',()=>{
  topFunction()
})

window.onscroll = function () {
  scrollFunction();
  topscrollFunction()
};

//for nav hamburger menu
function myFunction() { 
  let x = document.querySelector(".nav-item");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
const menu = document.getElementById('menu');

menu.addEventListener('click',()=>{
  myFunction()
})
