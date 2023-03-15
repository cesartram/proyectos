// Seleccionando Botones
let screen_p = document.getElementById("screen_p");
let screen_input = document.getElementById("screen_input");
let boton_clear = document.getElementById("clear");
let boton_igual = document.getElementById("boton_igual");
let boton_del = document.getElementById("del");
let localValue=0;

// Seleccion de botones y llenados de pantalla
const botones = document.getElementsByName("valor");
for (let boton of botones) {
    boton.addEventListener("click", function(){
        screen_input.value += boton.value;
    });
}

// Funcion para evaluar y calcular expresion
function totalOperacion(){
    localValue += eval(screen_input.value);
    screen_p.innerHTML = localValue;
    screen_input.value = ""
}

// Funcion para limpiar pantalla
function clearScreen(){
    screen_p.innerHTML = 0
    screen_input.value = ""
}

// Funcion para borrar 1 digito
function retroceder(){
    let valor = screen_input.value;
    valor = valor.slice(0,-1)
    screen_input.value = valor
}

// Añadiendo escucha de eventos especiales
boton_igual.addEventListener("click",totalOperacion);
boton_clear.addEventListener("click",clearScreen);
boton_del.addEventListener("click", retroceder);


// Añadiendo escucha al DOM ("Enter")
document.addEventListener("keydown",(keydown)=>{if(keydown.code === "Enter"){totalOperacion();}});