const header = document.querySelector('.header');
const menu = document.querySelector('.menu');
const navigation = document.querySelector('#site-nav');

function setMenu(open) {
  header.classList.toggle('is-open', open);
  menu.setAttribute('aria-expanded', String(open));
  menu.setAttribute('aria-label', open ? 'Закрыть меню' : 'Открыть меню');
}

menu.addEventListener('click', () => setMenu(!header.classList.contains('is-open')));
navigation.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    setMenu(false);
    menu.focus();
  }
});

