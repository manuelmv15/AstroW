document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.getElementById("menu");
    const mobileMenu = document.getElementById("mobileMenu");

    menuBtn.addEventListener("click", () => {
        // 🔁 toggle clases
        menuBtn.classList.toggle("menu-toggle");
        mobileMenu.classList.toggle("show");
    });

    // ❌ Cerrar menú si se toca fuera de él
    document.addEventListener("click", (event) => {
        if (
            !mobileMenu.contains(event.target) &&
            !menuBtn.contains(event.target)
        ) {
            menuBtn.classList.remove("menu-toggle");
            mobileMenu.classList.remove("show");
        }
    });
});


// const menuButton = document.getElementById('horizontal-expand');// Obtenemos el botón del menú (el ícono hamburguesa)



// const sidebar = document.getElementById('sidebar');// Obtenemos el sidebar completo


// //Escuchamos el clic en el botón
// menuButton.addEventListener('click', () => {
  
//   sidebar.classList.toggle('menu-toggle');// Alternamos la clase que expande o contrae el sidebar
//   menuButton.classList.toggle('toggle-menu-sidebar');// Alternamos la clase que convierte el ícono hamburguesa en una 'X'



// });