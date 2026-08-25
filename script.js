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


/* ==============================
   INSTAGRAM MODAL
   ============================== */

(() => {
  const instagramUrl =
    "https://www.instagram.com/modnyj_perekrestok.ukg/";

  const modal = document.getElementById("instagramModal");

  if (!modal) return;

  const isMobile = () =>
    window.matchMedia("(max-width: 768px)").matches;

  function openInstagram() {
    /* На телефоне сразу открываем Instagram */
    if (isMobile()) {
      window.location.href = instagramUrl;
      return;
    }

    /* На компьютере показываем QR-окно */
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("instagram-modal-open");
  }

  function closeInstagram() {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("instagram-modal-open");
  }

  /* Все элементы с data-instagram-open открывают Instagram */
  document.querySelectorAll("[data-instagram-open]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      openInstagram();
    });
  });

  /* Крестик и затемнённый фон закрывают окно */
  document.querySelectorAll("[data-instagram-close]").forEach((button) => {
    button.addEventListener("click", closeInstagram);
  });

  /* Закрытие клавишей Escape */
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("is-open")) {
      closeInstagram();
    }
  });
})();
