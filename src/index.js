import './styles/main.scss'


document.getElementById('btn-toggle').onclick = function() {
    document.getElementById('body').classList.toggle('dark');
    document.getElementById('html').classList.toggle('dark');
  }