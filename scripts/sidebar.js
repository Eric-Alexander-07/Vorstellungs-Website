let logo;
let main; 

function openSidebar() {
  if(document.querySelector('.picture-container')){
    console.log('opened');
    main = document.querySelector('.picture-container');
    logo = document.querySelector('.logo_hidden');
    logo.classList.add('logo_name');
    logo.classList.remove('logo_hidden');
    main.classList.add('verschoben');
    main.classList.remove('picture-container'); 
  }else{
    console.log('closed');
    main = document.querySelector('.verschoben');
    logo = document.querySelector('.logo_name');
    logo.classList.add('logo_hidden');
    logo.classList.remove('logo_name');
    main.classList.add('picture-container');
    main.classList.remove('verschoben'); 
  }
}

document.querySelector('.sidebar').innerHTML = `
<div class="logo-details">
<a href="#">
  <img onclick="
    openSidebar();
  " class="bx bx-menu" id="btn" src="./images/sidebar/menu.png">
</a>
<a href="./main.html" class="logo_hidden">Eric</a>
</div>
<ul class="nav-list">
<li>
  <a href="./weitere-dokumente.html">
    <img src="./images/sidebar/document.png">
    <span class="links_name">Weitere Dokumente</span>
  </a>
  <span class="tooltip">Weitere Dokumente</span>
</li>
<li>
  <a href="./sport.html">
    <img src="./images/sidebar/fitness.png">
    <span class="links_name">Sport</span>
  </a>
  <span class="tooltip">Sport</span>
</li>
<li>
  <a href="./musik.html">
    <img src="./images/sidebar/music.png">
    <span class="links_name">Musik</span>
  </a>
  <span class="tooltip">Musik</span>
</li>
<li>
  <a href="./trading.html">
    <img src="./images/sidebar/stocks.png">
    <span class="links_name">Trading</span>
  </a>
  <span class="tooltip">Trading</span>
</li>
<li>
  <a href="./programmieren.html">
    <img src="./images/sidebar/terminal.png"></img>
    <span class="links_name">Programmieren</span>
  </a>
  <span class="tooltip">Programmieren</span>
</li>
<li>
  <a href="./ehemalige-praktika.html">
    <img src="./images/sidebar/factory.png">
    <span class="links_name">Ehemalige Praktika</span>
  </a>
  <span class="tooltip">Ehemalige Praktika</span>
</li>
<li>
  <a href="./kontaktdaten.html">
    <img src="./images/sidebar/qr-code.png">
    <span class="links_name">Kontaktdaten</span>
  </a>
  <span class="tooltip">Kontaktdaten</span>
</li>
</ul>
`