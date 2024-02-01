let logo;
let main; 

function openSidebar() {
  if(document.querySelector('.logo_hidden')){
    console.log('opened');
    main = document.querySelectorAll('.static');
    logo = document.querySelectorAll('.logo_hidden');
    main.forEach((item) =>{
      item.classList.add('verschoben');
      item.classList.remove('static'); 
    });
    logo.forEach((item) => {
      item.classList.add('logo_name');
      item.classList.remove('logo_hidden');
    });
  }else{
    console.log('closed');
    main = document.querySelectorAll('.verschoben');
    logo = document.querySelectorAll('.logo_name');
    main.forEach((item) => {
      item.classList.add('static');
      item.classList.remove('verschoben'); 
    });
    logo.forEach((item) => {
      item.classList.add('logo_hidden');
      item.classList.remove('logo_name');
    });
  }
}

document.querySelector('.sidebar').innerHTML = `
<div class="logo-details">
<a href="#">
  <img onclick="
    openSidebar()
  " class="bx bx-menu sidebar-icon-hamburger" id="btn" src="./images/sidebar/menu.png">
</a>
<a href="./index.html" class="logo_hidden">Eric</a>
</div>
<ul class="nav-list">
<li>
  <a href="./weitere-dokumente.html">
    <img class="sidebar-icons" src="./images/sidebar/document.png">
    <span class="links_name">Weitere Dokumente</span>
  </a>
  <span class="tooltip">Weitere Dokumente</span>
</li>
<li>
  <a href="./sport.html">
    <img class="sidebar-icons" src="./images/sidebar/fitness.png">
    <span class="links_name">Sport</span>
  </a>
  <span class="tooltip">Sport</span>
</li>
<li>
  <a href="./musik.html">
    <img class="sidebar-icons" src="./images/sidebar/music.png">
    <span class="links_name">Musik</span>
  </a>
  <span class="tooltip">Musik</span>
</li>
<li>
  <a href="./trading.html">
    <img class="sidebar-icons" src="./images/sidebar/stocks.png">
    <span class="links_name">Trading</span>
  </a>
  <span class="tooltip">Trading</span>
</li>
<li>
  <a href="./programmieren.html">
    <img class="sidebar-icons" src="./images/sidebar/terminal.png"></img>
    <span class="links_name">Programmieren</span>
  </a>
  <span class="tooltip">Programmieren</span>
</li>
<li>
  <a href="./ehemalige-praktika.html">
    <img class="sidebar-icons" src="./images/sidebar/factory.png">
    <span class="links_name">Praktische Erfahrungen</span>
  </a>
  <span class="tooltip">Praktische Erfahrungen</span>
</li>
<li>
  <a href="./kontaktdaten.html">
    <img class="sidebar-icons" src="./images/sidebar/qr-code.png">
    <span class="links_name">Kontaktdaten</span>
  </a>
  <span class="tooltip">Kontaktdaten</span>
</li>
</ul>


<div class="circle invisible"></div>
<div class="circle invisible"></div>
<div class="circle invisible"></div>
<div class="circle invisible"></div>
<div class="circle invisible"></div>
<div class="circle invisible"></div>
<div class="circle invisible"></div>
<div class="circle invisible"></div>
<div class="circle invisible"></div>
<div class="circle invisible"></div>
<div class="circle invisible"></div>
<div class="circle invisible"></div>
<div class="circle invisible"></div>
<div class="circle invisible"></div>
<div class="circle invisible"></div>
<div class="circle invisible"></div>
<div class="circle invisible"></div>
<div class="circle invisible"></div>
<div class="circle invisible"></div>
<div class="circle invisible"></div>
`