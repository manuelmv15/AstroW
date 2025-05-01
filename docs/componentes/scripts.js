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


//codigo js para la navbar de demostracion 
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



//alertas

// const showAlertSuccessButton = document.getElementById('showAlertSuccessButton');
// const showAlertDangerButton = document.getElementById('showAlertDangerButton');
// const showAlertInfoButton = document.getElementById('showAlertInfoButton');


// const alertaWarning = document.querySelector('.alert-warning');
// const alertaSuccess = document.querySelector('.alert-success');
// const alertaDanger = document.querySelector('.alert-danger');
// const alertaInfo = document.querySelector('.alert-info');

// const showAlertWarningButton = document.getElementById('showAlertWarningButton');

// const closeBtn = document.querySelector('.close-btn');

// //para warning
// closeBtn.addEventListener('click', function(){

//     alertaWarning.classList.remove('show')
//     alertaWarning.classList.add('hide')
// })

// showAlertWarningButton.addEventListener('click', function(){
//     // alert()
//     // console.log(alerta)
//     alertaWarning.classList.add('show');
//     alertaWarning.classList.remove('hide');
//     alertaWarning.classList.add('showAlert');
    
//     setTimeout(function() {
//         alertaWarning.classList.remove('show');
//         alertaWarning.classList.add('hide');
//     }, 3000)

// })

// //para suiccess

// closeBtn.addEventListener('click', function(){

//     alertaSuccess.classList.remove('show')
//     alertaSuccess.classList.add('hide')
// })

// showAlertSuccessButton.addEventListener('click', function(){
//     alert()
//     // console.log(alerta)
//     alertaSuccess.classList.add('show');
//     alertaSuccess.classList.remove('hide');
//     alertaSuccess.classList.add('showAlert');
    
//     setTimeout(function() {
//         alertaSuccess.classList.remove('show');
//         alertaSuccess.classList.add('hide');
//     }, 3000)

// })



// //para danger

// closeBtn.addEventListener('click', function(){

//     alertaDanger.classList.remove('show')
//     alertaDanger.classList.add('hide')
// })

// showAlertDangerButton.addEventListener('click', function(){
//     // alert()
//     // console.log(alerta)
//     alertaDanger.classList.add('show');
//     alertaDanger.classList.remove('hide');
//     alertaDanger.classList.add('showAlert');
    
//     setTimeout(function() {
//         alertaDanger.classList.remove('show');
//         alertaDanger.classList.add('hide');
//     }, 3000)

// })

// //para info

// // closeBtn.addEventListener('click', function(){

// //     alertaInfo.classList.remove('show')
// //     alertaInfo.classList.add('hide')
// // })

// showAlertInfoButton.addEventListener('click', function(){
//     // alert()
//     // console.log(alerta)
//     alertaInfo.classList.add('show');
//     alertaInfo.classList.remove('hide');
//     alertaInfo.classList.add('showAlert');
    
//     setTimeout(function() {
//         alertaInfo.classList.remove('show');
//         alertaInfo.classList.add('hide');
//     }, 3000)

// })


// Mapeo de botones y tipos de alerta
const alertButtons = {
    warning: document.getElementById('showAlertWarningButton'),
    success: document.getElementById('showAlertSuccessButton'),
    danger: document.getElementById('showAlertDangerButton'),
    info: document.getElementById('showAlertInfoButton'),
  };
  
  // Función para mostrar alerta por tipo
  function showAlert(type) {
    const alert = document.querySelector(`.alert-${type}`);
    if (!alert) return;
  
    alert.classList.add('show', 'showAlert');
    alert.classList.remove('hide');
  
    // Cerrar automáticamente después de 3 segundos
    setTimeout(() => {
      alert.classList.remove('show', 'showAlert');
      alert.classList.add('hide');
    }, 3000);
  }
  
  // Añadir listeners a los botones de mostrar
  for (const type in alertButtons) {
    alertButtons[type].addEventListener('click', () => showAlert(type));
  }
  
  // Función para cerrar alerta manualmente
  document.querySelectorAll('.alert-warning, .alert-success, .alert-danger, .alert-info').forEach(alert => {
    const closeBtn = alert.querySelector('.close-btn');
    closeBtn.addEventListener('click', () => {
      alert.classList.remove('show');
      alert.classList.add('hide');
    });
  });
  
//para el navbar alternativo el dos el del modal

document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.getElementById("menu2");
    const mobileMenu = document.getElementById("mobileMenu2");

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



//script para el side bar

