body = document.getElementById('body');

Element.prototype.hide = function() {
  this.style.display = "none";
  body.style.display = "block";
}

Element.prototype.show = function() {
  this.style.display = "block";
  body.style.display = "none";
}
