
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
//chữ chạy
var typed = new Typed('#auto-type', {
  strings: [ 'HTML,CSS ,JS,ReactJs' , 'coming soon NextJs'],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true
});
//dữ liệu

// render dữ liệu





