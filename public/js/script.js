
let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="responsive";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}
function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
// Función para ocultar o mostrar el menú en base al desplazamiento
let prevScrollpos = window.pageYOffset; // Guarda la posición anterior del scroll

window.onscroll = function() {
    let currentScrollPos = window.pageYOffset; // Obtén la posición actual del scroll
    const nav = document.getElementById("nav");

    // Si el scroll es hacia abajo, oculta el menú
    if (prevScrollpos > currentScrollPos) {
        nav.classList.add("responsive");
    } else {
        nav.classList.remove("responsive");
    }

    // Actualiza la posición anterior
    prevScrollpos = currentScrollPos;
};


// barras skill movimientos 
// Detectar el evento de scroll para aplicar la animación a las barras de habilidad
window.onscroll = function() {
    efectoHabilidades();
};

// Función que activa la animación de las barras de habilidad cuando la sección es visible
function efectoHabilidades() {
    // Obtener la sección de habilidades
    const skillsSection = document.getElementById("skills");
    const barrasSkill = document.querySelectorAll(".barra-skill");

    // Determinar si la sección es visible en el viewport
    const sectionTop = skillsSection.getBoundingClientRect().top;
    const sectionBottom = skillsSection.getBoundingClientRect().bottom;
    const isInViewport = sectionTop < window.innerHeight && sectionBottom >= 0;

    // Si la sección está visible, activamos la animación de las barras
    if (isInViewport) {
        barrasSkill.forEach(function(barra) {
            const progreso = barra.querySelector(".progreso");
            const porcentaje = parseInt(progreso.querySelector("span").innerText);

            // Establecer la animación para las barras de habilidad
            // Inicia desde 0% y va incrementando hasta el porcentaje indicado
            progreso.style.transition = 'width 3s ease-out'; // Transición más suave
            progreso.style.width = porcentaje + '%'; // Ajusta el progreso según el porcentaje
        });
    }
}

// También se puede activar la animación de las barras al cargar la página
document.addEventListener("DOMContentLoaded", function() {
    efectoHabilidades();
});

// Botón de Instagram
document.querySelectorAll('.fa-brands.fa-instagram').forEach(function(button) {
    button.addEventListener("click", function() {
        window.open("https://www.instagram.com/tonymoyafresh/", "_blank");
    });
});

// Botón de LinkedIn
document.querySelectorAll('.fa-brands.fa-linkedin-in').forEach(function(button) {
    button.addEventListener("click", function() {
        window.open("https://www.linkedin.com/in/antoniomoyadeveloper/", "_blank");
    });
});

// Botón de GitHub
document.querySelectorAll('.fa-brands.fa-github').forEach(function(button) {
    button.addEventListener("click", function() {
        window.open("https://github.com/TonyMoyaCode", "_blank");
    });
});

 // Boton que descarga El CV 

 document.getElementById("downloadCV").addEventListener("click", function() {
    const pdfURL = "public/assets/ANTONIO-MOYACV.pdf"; 
    window.open(pdfURL, "_blank"); // Esto abrirá el PDF en una nueva pestaña
});

document.getElementById("downloadCV").addEventListener("click", function() {
    const pdfURL = "public/assets/ANTONIO-MOYACV.pdf"; 

    // Preguntar al usuario si desea descargar el archivo
    if (confirm("¿Deseas descargar el archivo CV.pdf?")) {
        // Si el usuario acepta, abre el PDF en una nueva pestaña
        window.open(pdfURL, "_blank");
    } else {
        // Si el usuario cancela, puedes manejarlo aquí (opcional)
        console.log("Descarga cancelada");
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('themeToggle');
    const icon = document.getElementById('icon');
    const body = document.body;

    // Configura el tema inicial
    if (!localStorage.getItem('theme')) {
        localStorage.setItem('theme', 'light-theme'); // Tema predeterminado
    }
    body.className = localStorage.getItem('theme');
    updateIcon();

    // Cambia el tema al hacer clic en el botón
    themeToggle.addEventListener('click', () => {
        if (body.className === 'light-theme') {
            body.className = 'dark-theme';
            localStorage.setItem('theme', 'dark-theme');
        } else {
            body.className = 'light-theme';
            localStorage.setItem('theme', 'light-theme');
        }
        updateIcon();
    });

    // Cambia el ícono según el tema
    function updateIcon() {
        icon.textContent = body.className === 'light-theme' ? '🌞' : '🌙';
    }
});
// Seleccionar el botón de cambio de tema y el body
const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Revisar si hay un tema guardado en localStorage
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-theme');
    themeToggleButton.textContent = '☀️'; // Cambiar el ícono del botón
}

// Función para alternar el tema
themeToggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    
    // Guardar el tema en localStorage
    if (body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark');
        themeToggleButton.textContent = '☀️'; // Cambiar ícono a sol
    } else {
        localStorage.setItem('theme', 'light');
        themeToggleButton.textContent = '🌙'; // Cambiar ícono a luna
    }
});
document.getElementById('themeToggle').addEventListener('click', function() {
    // Cambia entre los temas claro y oscuro
    document.body.classList.toggle('bg-dark');
    document.body.classList.toggle('bg-light');

    // Cambia el icono
    const icon = this.querySelector('i');
    if (document.body.classList.contains('bg-dark')) {
        icon.classList.remove('bi-moon-stars-fill');
        icon.classList.add('bi-sun-fill');
    } else {
        icon.classList.remove('bi-sun-fill');
        icon.classList.add('bi-moon-stars-fill');
    }
});
 // ANIMACIONES LOGO 
// Espera a que el contenido del documento esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
    gsap.from(".tech-logo", {
      duration: 1.5, // Duración de la animación
      opacity: 0,    // Comienza transparente
      scale: 0.5,    // Comienza pequeño
      stagger: 0.3   // Intervalo de tiempo entre las animaciones
    });
  });
  
  let logo = document.querySelector('.tech-logo');
if (logo) {
  logo.classList.add('animado');
} else {
  console.log('Logo no encontrado');
}
// efecto logos 360 
const logos = document.querySelectorAll('.tech-logo');

logos.forEach((logo) => {
  logo.addEventListener('touchstart', () => {
    // Agregar clase con la animación personalizada
    logo.classList.add('touched');
    
    // Eliminar la clase después de la animación para que pueda repetirse
    setTimeout(() => {
      logo.classList.remove('touched');
    }, 500); // Tiempo que dura la animación
  });
});
// ajusta el valor negativo del encabezado 
document.querySelector("#boton-sobre-mi").addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector("#sobre-mi").scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
    });

    window.scrollBy(0, -60); // Ajusta el valor negativo según el tamaño de tu encabezado
});
// para el contacto : 

// Seleccionar el formulario y manejar el evento de envío
document.querySelector('#contact-form').addEventListener('submit', async (e) => {
    e.preventDefault();  // Evitar el comportamiento por defecto (recargar la página)
  
    const data = {
      name: document.querySelector('#name').value,
      email: document.querySelector('#email').value,
      message: document.querySelector('#message').value,
    };
  
    console.log('Datos enviados:', data); // Verifica que los datos se capturan correctamente
  
    try {
      // Enviar datos al backend
      const response = await fetch('http://localhost:3001/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      const result = await response.text();
      console.log('Respuesta del servidor:', result);
  
      if (response.ok) {
        alert('Correo enviado con éxito');
      } else {
        alert('Error al enviar el correo: ' + result);
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
      alert('Ocurrió un problema al enviar el correo.');
    }
  });
  