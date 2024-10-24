let menuVisible = false;

// Función que oculta o muestra el menú
function mostrarOcultarMenu() {
    const nav = document.getElementById("nav");
    nav.classList.toggle("responsive");
    menuVisible = !menuVisible; // Alterna el valor de menuVisible
}


let lastScrollTop = 0; // Guarda la posición del scroll
const nav = document.getElementById("nav");

window.addEventListener("scroll", function() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // Si el usuario hace scroll hacia abajo, oculta el menú
        nav.classList.add("hidden");
    } else {
        // Si el usuario hace scroll hacia arriba, muestra el menú
        nav.classList.remove("hidden");
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Para evitar problemas en la parte superior
});

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


//Boton que descarga el pdf CV Antonio moya 
document.getElementById('downloadCV').addEventListener('click', function() {
    open("PortafolioTony/img/CV.jpg", "_blank");
});
