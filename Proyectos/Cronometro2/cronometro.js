
// Seleccionar los elementos donde se mostrara el tiempo actualizado
let minutos = document.getElementById("minutos");
let segundos = document.getElementById("segundos");
let milesimas = document.getElementById("milesimas");
let lista = document.getElementById("lista");

// Seleccionar los botones
let botonPlay = document.getElementById("play");
let botonPausa = document.getElementById("pausa");
let botonReiniciar = document.getElementById("reiniciar");
let botonCapturar = document.getElementById("capturar");

//Crear variables de conteo o control
let contadorMinutos = 0;
let contadorSegundos = 0;
let contadorMilesimas = 0;
let vuelta = 0;
let incremento;

// Agregar escucha (addEventListener) a botones


let varmilesimas = 0;
let varsegundos = 0;
let varminutos = 0;


let start = ()=>{
    // Funcion de incremento de contadores
    const conteo = ()=>{
        //Incremento de milesimas cada 10 nanosegundos
        contadorMilesimas++
        if(contadorMilesimas < 100){
            if(contadorMilesimas < 10){
                milesimas.innerText = "0" + contadorMilesimas;
            }else{
                milesimas.innerText = contadorMilesimas;
            }
        }else{
            //Cuando se llegue a 99 milesimas se reiniciara la cuenta
            contadorMilesimas = 0;
            //Incremento de segundos luego de transcurrir 99 milesimas
            contadorSegundos++;
            if(contadorSegundos < 60){
                if(contadorSegundos < 10){
                    segundos.innerText = "0" + contadorSegundos;
                }else{
                    segundos.innerText = contadorSegundos;
                }
            }else{
                //Cuando se llegue a 59 segundos se reiniciara la cuenta
                contadorSegundos = 0;
                //Incremento de minutos luego de transcurrir 59 segundos
                contadorMinutos++;
                if(contadorMinutos < 60){
                    if(contadorMinutos < 10){
                        minutos.innerText = "0" + contadorMinutos;
                    }else{
                        minutos.innerText = contadorMinutos;
                    }
                }else{
                    //Cuando se llegue a 59 minutos se reiniciara la cuenta
                    contadorMinutos = 0;
                }
            }
        }
    }

    //Inicio de conteo
    incremento = setInterval(conteo,10);

    botonPlay.removeEventListener("click", start);
}

//Boton de play
botonPlay.addEventListener("click", start);

//Boton de Pausa
botonPausa.addEventListener("click",()=>{
    clearInterval(incremento)
    botonPlay.addEventListener("click", start);
});

//Boton de reinicio
botonReiniciar.addEventListener("click",()=>{
    contadorMinutos = 0;
    contadorSegundos = 0;
    contadorMilesimas = 0;
    minutos.innerText = "00";
    segundos.innerText = "00";
    milesimas.innerText = "00";
    lista.innerHTML = "";
    lista.classList.add("hidden")
});


//Botona de Captura
botonCapturar.addEventListener("click",()=>{ 
    if(contadorMilesimas > 0 && contadorSegundos >= 0){
        //Se crea un nuevo parrafo
        let parrafo = document.createElement("p");
        //Se llena el parrafo con el tiempo que registen las variables de conteo 
        //al momento de presionar el boton de captura.
        if(contadorMinutos < 10){
            if(contadorSegundos < 10){
                if(contadorMilesimas < 10){
                    parrafo.textContent = (`0${contadorMinutos}:0${contadorSegundos}:0${contadorMilesimas}`);
                }
                else{
                    parrafo.textContent = (`0${contadorMinutos}:0${contadorSegundos}:${contadorMilesimas}`);
                }
            }else{
                parrafo.textContent = (`0${contadorMinutos}:${contadorSegundos}:${contadorMilesimas}`);
            }
        }else{
            parrafo.textContent = (`${contadorMinutos}:${contadorSegundos}:${contadorMilesimas}`);
        }
        parrafo.classList.add("text-[25px]","font-[700]","text-white");
        lista.classList.remove("hidden")
        lista.classList.add("bg-black/25","rounded-xl","flex","flex-col","items-center","py-4");
        //Se añade ese nuevo parrafo al con la clase lista
        lista.appendChild(parrafo);
    }
});




// la puesta en marcha de un cronometro basicamente seria:
/*
let cronometro = ()=>{
    varmilesimas++
    if(varmilesimas < 100){
        parrafomilesimas.innerText = varmilesimas;
    }else{
        varsegundos++
        varmilesimas = 0;
        if(varsegundos < 60){
            parrafosegundos.innerText = varsegundos;
        }else{
            varminutos++;
            varsegundos = 0;
            if(varminutos < 60){
                parrafominutos.innerText= varminutos;
            }else{
                varminutos = 0;
            }
        }
    }
}
*/