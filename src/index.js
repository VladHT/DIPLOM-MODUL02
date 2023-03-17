import './styles/main.scss'


document.getElementById('btn-toggle').onclick = function() {
    document.getElementById('body').classList.toggle('dark');
    document.getElementById('html').classList.toggle('dark');
  }

  document.getElementById('menu_show').onclick = function() {
  document.getElementById("menu").classList.toggle("show");
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
