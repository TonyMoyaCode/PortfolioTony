
console.log('¡script.js está cargado!');

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

//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("photoshop");
        habilidades[3].classList.add("wordpress");
        habilidades[4].classList.add("drupal");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyect");
    }
}

//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 
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
    const pdfURL = "assets/CVSF.pdf"; 
    window.open(pdfURL, "_blank"); // Esto abrirá el PDF en una nueva pestaña
});

document.getElementById("downloadCV").addEventListener("click", function() {
    const pdfURL = "assets/CVSF.pdf"; 

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
