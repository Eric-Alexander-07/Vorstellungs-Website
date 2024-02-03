let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let searchBtn = document.querySelector(".bx-search");

closeBtn.addEventListener("click", ()=>{
  sidebar.classList.toggle("open");
});

function swipe() {
  let largeImage = this.document.getElementById('largeImage');
  let url = largeImage.getAttribute('src');
  window.open(url);
}
function swipe2() {
  let largeImage = this.document.getElementById('largeImage2');
  let url = largeImage.getAttribute('src');
  window.open(url);
}
function swipe3() {
  let largeImage = this.document.getElementById('largeImage3');
  let url = largeImage.getAttribute('src');
  window.open(url);
}
function swipe4() {
  let largeImage = this.document.getElementById('largeImage4');
  let url = largeImage.getAttribute('src');
  window.open(url);
}