
let menuVisible = false
// Función que muestra u oculta el Menú
function mostrarOcultarMenu() {
    if (menuVisible) {
        document.getElementById("nav").classList = "";
        menuVisible = false
    } else {
        document.getElementById("nav").classList = "responsive";
        menuVisible = true
    }
}

function seleccionar() {
    //Oculto el menu una vez que se selecciona una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false
}
// Función que Aplica para la barra de SKILLS
function efectoSkills() {
    var skills = document.getElementById("skills")
    var distancia_skills = windows.innerHeight - skills.getBoundingClientRect().top;
    if (distancio_skills >= 300) {
        let skill = document.getElementsByClassName("progreso")
        skill(0).classList.add("javascript");
        skill(1).classList.add("htmlccs");
        skill(2).classList.add("SASS");
        skill(3).classList.add("TAILWIND");
    }
}
// Detecto el Scrolling para aplicar la animacion de la barra de SKILLS 
window.onscroll = function () {
    efectoSkills();
}
/*Clock and Date*/
let dia = document.getElementById("fecha");
let hora = document.getElementById("hora");

"use strict";
setInterval(
    function () {
        let tiempo = new Date();
        dia.innerText = tiempo.toLocaleDateString();
        hora.innerText = tiempo.toLocaleTimeString();
    })

/*Boton*/
let boton = document.getElementById("boton-formulario")


function cambiar (){
    boton.innerText = "Enviado";
    setTimeout(
        function(){

            boton.innerHTML = 'Enviar Mensaje<i class="fa-solid fa-paper-plane"></i> <span class="overlay"></span>';
        },6000
    )
}
boton.addEventListener("click", cambiar)


