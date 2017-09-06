var catalogtitle = document.querySelector(".site-navigation-item-catalog");
var catalogmenu = document.querySelector(".catalog-navigation");

catalogtitle.addEventListener("click", function(evt) {
  evt.preventDefault();
  catalogmenu.classList.toggle("visually-hidden");
});


catalogtitle.addEventListener("focus", function(evt) {
  evt.preventDefault();
  catalogmenu.classList.remove("visually-hidden");
});
