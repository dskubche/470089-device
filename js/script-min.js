var link = document.querySelector(".btn-write-us");
var popup = document.querySelector(".modal-write-us");
var map_link = document.querySelector(".map-open");
var map_popup = document.querySelector(".modal-map");
var close = popup.querySelector(".modal-write-us-close");
var map_close = map_popup.querySelector(".modal-map-close");
var username = popup.querySelector("[name=username]");
var email = popup.querySelector("[name=email]");
var letter = popup.querySelector("[name=letter]");
var form = popup.querySelector("form");
var usernamestorage = localStorage.getItem("username");
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
link.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  if (usernamestorage) {
    username.value = usernamestorage;
    email.focus();
  } else {
    username.focus();
  }
});
form.addEventListener("submit", function(evt) {
  if (!username.value || !email.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    localStorage.setItem("username", username.value);
  }
});
close.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});
window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});
map_link.addEventListener("click", function(evt) {
  evt.preventDefault();
  map_popup.classList.add("modal-show");
});
map_close.addEventListener("click", function(evt) {
  evt.preventDefault();
  map_popup.classList.remove("modal-show");
});
window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (map_popup.classList.contains("modal-show")) {
      map_popup.classList.remove("modal-show");
    }
  }
});
