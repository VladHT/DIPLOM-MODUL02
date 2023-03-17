import './styles/main.scss'


document.getElementById('btn-toggle').onclick = function() {
    document.getElementById('body').classList.toggle('dark');
    document.getElementById('html').classList.toggle('dark');
  }

  document.getElementById('menu_show').onclick = function() {
  document.getElementById("menu").classList.toggle("show");
  document.getElementById('html').classList.toggle('mask');
}

const links = document.querySelectorAll(".smooz");

       for (const link of links) {
       link.addEventListener("click", clickHandler);
       }

       function clickHandler(e) {
       e.preventDefault();
       const href = this.getAttribute("href");

       document.querySelector(href).scrollIntoView({
           behavior: "smooth"
       });
       }



window.onscroll = function(){scrollFunction()};


function scrollFunction(){
  if ( document.body.scrollTop > 900 || document.documentElement.scrollTop > 900){
      document.getElementById('html').classList.remove ('mask');
      document.getElementById('menu').classList.remove ('show');
  }
}

