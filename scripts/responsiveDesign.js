let width = screen.width;
let height = screen.height;
if(width/height <= 0.9) {
  let sidebar = document.querySelectorAll('.sidebar');
  let static = document.querySelectorAll('.static');
  let tabelle = document.querySelectorAll('.grid-container');
  let mouse = document.querySelectorAll('.mouse-Container');

  mouse.forEach((item) => {
    item.classList.add('invisible');
  });
  tabelle.forEach((item) =>{
    item.classList.add('handy-grid');
  });
  sidebar.forEach((item) => {
    item.classList.add('handy-sidebar');
  });
  static.forEach((item) => {
    item.classList.remove('static');
  });
}