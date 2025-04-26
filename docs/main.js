document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('site-header');
    const menuBtn = document.getElementById('menuAlt');

    menuBtn.addEventListener('click', () => {
      // toggle the hamburger ↔ close icon
      menuBtn.classList.toggle('nav-menu-toggle');
      // toggle mobile menu visibility
      header.classList.toggle('nav-expand');
    });

    // ❌ Cerrar menú si se toca fuera de él
    document.addEventListener("click", (event) => {
        const isClickInsideMenu = header.contains(event.target);
        const isClickOnButton = menuBtn.contains(event.target);

        if (!isClickInsideMenu && !isClickOnButton) {
            header.classList.remove('nav-expand');
            menuBtn.classList.remove('nav-menu-toggle');
        }
    });
});