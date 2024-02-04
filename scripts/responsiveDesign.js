let width = screen.width;
let height = screen.height;
if(width/height <= 0.9) {
  let sidebar = document.querySelectorAll('.sidebar');
  let static = document.querySelectorAll('.static');
  console.log('handy');
  sidebar.forEach((item) => {
    item.classList.add('handy-sidebar');
  });
  static.forEach((item) => {
    item.classList.remove('static');
  });
}