const menu = document.querySelector('.menu')
const close = document.querySelector('.close')
const nav = document.querySelector('nav')

menu.addEventListener('click', () => {
    nav.classList.add('open-nav');
    console.log("worked")
})
close.addEventListener('click', () => {
    nav.classList.remove('open-nav')
})


var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".sticky").style.top = "0";
    
  } else {
    document.querySelector(".sticky").style.top = "-70px";

  }
  prevScrollpos = currentScrollPos;
}