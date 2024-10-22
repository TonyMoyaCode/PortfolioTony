let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
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
 //boton para link de instagram
 document.querySelector('.fa-brands.fa-instagram').addEventListener("click", function() {
    window.open("https://www.instagram.com/tonymoyafresh/", "_blank");
});

document.querySelector('.fa-brands.fa-linkedin-in').addEventListener("click", function() {
    window.open("https://www.linkedin.com/in/antoniomoyadeveloper/", "_blank");
});

//Boton que descarga el pdf CV Antonio moya 
document.getElementById('downloadCV').addEventListener('click', function() {
    // Crear un enlace dinámico para la descarga
    var link = document.createElement('a');
    link.href = 'CV.JPG';  // La ruta hacia el archivo PDF
    link.download = 'CV.JPG'; // El nombre del archivo descargado
    link.click();
});
// para enviar correo por contacto 

