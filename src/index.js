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
  if ( document.body.scrollTop > 400 || document.documentElement.scrollTop > 400){
      document.getElementById('html').classList.remove ('mask');
      document.getElementById('menu').classList.remove ('show');
  }
};

window.onclick = function(){hideFunction()};

function hideFunction(){
  if(document.getElementById('menu').classList.contains ('show')){
    window.addEventListener('click',function(e){
      document.getElementById('menu').classList.toggle ('show');
      document.getElementById('html').classList.toggle ('mask');
    })
  }
}

document.getElementById('close').onclick = function() {
  document.getElementById('menu').classList.remove ('show');
  document.getElementById('html').classList.remove ('mask');
}