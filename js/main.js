let lastScrollTop = 0;
let navbar = document.querySelector('#navbar')
window.addEventListener("scroll",function(){
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
if(scrollTop > lastScrollTop) {
  navbar.classList.add('icon');
}
else {
  navbar.classList.remove('icon');
}
lastScrollTop = scrollTop;
})

// var body = document.querySelector('body');
// body.classList.add('short-scrollbar');
//menu 
const menuIcon = document.querySelector(".menu-icon");
const menuContainer = document.querySelector(".show-menu1");

menuIcon.addEventListener("click", function() {
  menuContainer.classList.toggle("show-menu");
});

var typed = new Typed('#auto-type', {
  strings: [ 'HTML CSS ,JS', 'Chars'],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true
});



// class courses {
// constructor(){
//   this.title = document.querySelector('.title');
//   this.name = name;
// }
// getName() {
//   return this.name;
// } 
// }