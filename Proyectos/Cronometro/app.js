// Seleccion de elementos HTML 

// Campos de texto
let minuto = document.getElementById("minuto");
let segundo = document.getElementById("segundo");
let milesima = document.getElementById("milesima");
let lista = document.getElementById("lista")

// Botones
let iniciar = document.getElementById("inicio");
let pausar = document.getElementById("pausa");
let reiniciar = document.getElementById("reiniciar");
let capturar = document.getElementById("capturar");

// Creando Variables de Conteo
let contadorMil = 0;
let  contadorSeg = 0;
let  contadorMin = 0;
let vuelta = 0;
let incremento;

// Agregando escucha a botones

// Iniciar
iniciar.addEventListener("click", ()=>{
    //Ocultar boton de play y Reinicio
    iniciar.classList.add("oculto");
    pausar.classList.remove("oculto");
    reiniciar.classList.add("oculto");
    capturar.classList.remove("oculto");

    // Funcion de incremento en contadores
    const conteo = ()=> {
        // Incremento de Milesima
        contadorMil++
        if(contadorMil < 99){ 
            if(contadorMil < 10){ 
                milesima.innerText = `0${contadorMil}` 
            }else{
                milesima.innerText = contadorMil 
            }
        }else{
            contadorMil = 0;
            // Incremento se Segundo
            contadorSeg++
            if(contadorSeg < 59){ 
                if(contadorSeg < 10){ 
                    segundo.innerText = `0${contadorSeg}` 
                }else{
                    segundo.innerText = contadorSeg 
                }
            }
            else{
                contadorSeg = 0;
                // Incremento de Minuto
                contadorMin++
                if(contadorMin < 59){ 
                    if(contadorMin < 10){ 
                        minuto.innerText = `0${contadorMin}` 
                    }else{
                        minuto.innerText = contadorMin 
                    }
                }
                else{
                    contadorMin = 0; 
                } 
            } 
        } 
    }

    // Inicio de Conteo
    incremento = setInterval(conteo,10);
});


// Pausar
pausar.addEventListener("click",()=>{
    // Mostrar y ocultar botones
    iniciar.classList.remove("oculto");
    pausar.classList.add("oculto");
    reiniciar.classList.remove("oculto");
    capturar.classList.add("oculto");

    // Detener Conteo
    clearInterval(incremento);
});


// Reiniciar
reiniciar.addEventListener("click",()=>{
    // Remover estilos de lista
    lista.classList.remove("lista");
    lista.classList.add("lista_oculto");
    vuelta = 0;
    // Reiniciar Contadores
    clearInterval(incremento)
    milesima.innerText = "00";
    contadorMil = 0;
    segundo.innerText = "00";
    contadorSeg = 0;
    minuto.innerText = "00";
    contadorMin = 0;
    lista.innerHTML = ""
});



// Capturar
capturar.addEventListener("click",function(){
    // Añadir Estilos a lista
    if(lista.classList.contains("lista_oculto") == true){lista.classList.add("lista"); lista.classList.remove("lista_oculto"); lista.innerText ="N° Tiempo ⏱"}
    // Capturar Tiempos
    if(milesima.innerText > 0 && segundo.innerText >= 0){
        vuelta++;
        let nuevoTiempo;
        if(vuelta < 10){
            nuevoTiempo = (`0${vuelta}) ${minuto.innerText}:${segundo.innerText}:${milesima.innerText}`);
        }else{
            nuevoTiempo = (`${vuelta}) ${minuto.innerText}:${segundo.innerText}:${milesima.innerText}`);
        }
        let captura = document.createElement("p");
        captura.innerText = nuevoTiempo;
        lista.appendChild(captura);
    }
});