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
    const pdfURL = "assets/cv.pdf"; 
    window.open(pdfURL, "_blank"); // Esto abrirá el PDF en una nueva pestaña
});

document.getElementById("downloadCV").addEventListener("click", function() {
    const pdfURL = "assets/cv.pdf"; 

    // Preguntar al usuario si desea descargar el archivo
    if (confirm("¿Deseas descargar el archivo CV.pdf?")) {
        // Si el usuario acepta, abre el PDF en una nueva pestaña
        window.open(pdfURL, "_blank");
    } else {
        // Si el usuario cancela, puedes manejarlo aquí (opcional)
        console.log("Descarga cancelada");
    }
});
