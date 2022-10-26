/*Nos traemos los distintos elemento como variables*/
/***************************************************/
/*BOTONES de los Menus*/
    /*boton del menu principal*/
const btnStartGame = document.querySelector('.btn-iniciarjuego');
const btnMenuAgregarPalabra = document.getElementById('btnMenuAgregarPalabra');

    /*boton del menu agregar palabras*/
const btnAgregarPlabra = document.getElementById("btnAgregarPalabra")
const btnAgregarPalabraVolver = document.getElementById("btnAgregarPalabraVolver")

    /*botones de la pantalla de Juego */
const btnNewGame = document.getElementById("btn-nuevojuego");
const btnDesistir = document.getElementById("btn-desistir");

/*ALERTAS*/
const cartelDeAlerta = document.getElementById("alertas")
const alertaVive = document.getElementById('alerta-vive');
const alertaMuere = document.getElementById('alerta-muere');
const palabraSecretaAlertaJuego = document.getElementById('palabraSecretaAlertaJuego');
const puntosAlertaJuego = document.getElementById('puntosAlertaJuego');

const pantallacompleta = document.getElementById("pantallacompleta")
const trasladaSecciones = document.getElementById("trasladaSecciones")
const body = document.querySelector('body');
const divHiddenWord = document.getElementById('hidden-word');
const divWrongLetters = document.getElementById('wrong-letters')
const spanPuntajemaximo = document.getElementById('puntajemaximo');
const inputAgregarPalabra = document.getElementById("inputAgregarPalabra");
const toasty = document.getElementById("toasty");
const toastyaudio=document.getElementById("toastyaudio");
const viveAudio = document.getElementById("viveAudio");
const muereAudio = document.getElementById("muereAudio");

const cartelAgregarPalabras = document.getElementById("alertaagregarpalabras");
const SpanCampoVacio = document.getElementById("campovacio");
const SpanPalabraAgragada = document.getElementById("palabraagregada");
const SpanPalabraRepetida = document.getElementById("palabrarepetida")

/*Le agregamos funcionalidades a los botones*/
btnStartGame.onclick= nuevoJuego;
btnDesistir.onclick = volverAlMenuPrincipal;

btnAgregarPalabraVolver.onclick = volverAlMenuPrincipal;
btnMenuAgregarPalabra.onclick= seccionagregarpalabra;
btnAgregarPlabra.onclick= agregarPalabra;

body.onkeyup = verificarLetra;
btnNewGame.onclick=nuevoJuego;

/*Creamos las distintas variables para nuestro juego*/
let letrasUsadas;
let letrasAcertadas;
let letrasErradas;
let palabraSeleccionada="";
let complete = false
let puntos;
let puntosmaximos=0;
let intentos=0;
let palabras =["verdugo","caballero","espada","laud","cruzada","castillo","herreria","monje"];
let abecedario="ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
let escucharTeclado=false;
let escucharTrucos=true;
let trucos="";
let toastyrun=false
let godmode = false;
toasty.style.right="-150px";


function nuevoJuego(){
    trasladaSecciones.style.transform = "translateX(-811px)";
    reinicioVariables();
 
    crearPalabra();
    // hangedCharacter(0);
    // alertWin.style.display = 'none';
    // alertFail.style.display = 'none';
    // keyboardUnlock();
}

function reinicioVariables(){
    pantallacompleta.style.background="none";
    letrasUsadas = "";
    letrasAcertadas=0
    letrasErradas=0
    if(complete == false){ puntos = 0; }
    complete = false;
    escucharTeclado=true;
    intentos = 0;
    if(palabraSeleccionada){quitarGuiones()};
    puntosAlertaJuego.innerHTML=0;
    palabraSecretaAlertaJuego.innerHTML="";
    divWrongLetters.innerHTML="";
    alertaVive.style.display="none";
    alertaMuere.style.display="none";
    escucharTrucos=false;
    cartelDeAlerta.style.top="-36%";
}

function volverAlMenuPrincipal(){
    if(trasladaSecciones.style.transform=="translateX(-811px)"){
        godmode=false;               
    }
    pantallacompleta.style.background="none";
    trasladaSecciones.style.transform = "translateX(-404px)";     
    escucharTeclado=false; 
    escucharTrucos=true;   
}

function seccionagregarpalabra(){
    trasladaSecciones.style.transform = "translateX(0px)";
    escucharTrucos=false;
}

function agregarPalabra(){
    if(!inputAgregarPalabra.value.trim() == ""){
        if(!palabras.includes(inputAgregarPalabra.value.trim().toLowerCase())){
            palabras.push(inputAgregarPalabra.value.trim().toLowerCase());
            inputAgregarPalabra.value="";
            btnAgregarPlabra.disabled="true";
            SpanPalabraAgragada.style.display="inline";
            cartelAgregarPalabras.style.top="20%";
            pantallacompleta.style.background="rgba(0,0,0,0.5)"
            setTimeout(function(){cartelAgregarPalabras.style.top="-14%";
                pantallacompleta.style.background="none";    
                btnAgregarPlabra.disabled="none";
                console.log("porque no funciona");
            },800);
        }else{
            SpanPalabraRepetida.style.display="inline";
            cartelAgregarPalabras.style.top="20%";
        }
    }else{
        btnAgregarPlabra.setAttribute("disabled","true");
        SpanCampoVacio.style.display="inline";
        cartelAgregarPalabras.style.top="20%";
        setTimeout(function(){ cartelAgregarPalabras.style.top="-14%";
            btnAgregarPlabra.disabled="false";
            console.log("porque no funciona ");
        },800);
    }
}
function crearPalabra(){
    let numeroAlazar = Math.floor(Math.random()*palabras.length);
    palabraSeleccionada = palabras[numeroAlazar].toUpperCase();
    arrayLetras = palabraSeleccionada.split('');  /*El metodo .split me devuelve un array */

    for(let i=0; i<arrayLetras.length; i++){
        const div = document.createElement('div');
        div.setAttribute('id', i);
        div.textContent = ' ';
        divHiddenWord.appendChild(div);
    }
}

function verificarLetra(evento){
    if(escucharTeclado){
        teclaPresionada = evento.key.toUpperCase();
        if(abecedario.includes(teclaPresionada) && !letrasUsadas.toString().includes(teclaPresionada)){
           letrasUsadas+=teclaPresionada;
           buscarLetraenPalabra(teclaPresionada);
        }
    }
    if(escucharTrucos){
        trucos+=evento.key.toLowerCase();
        verificarTrucos(trucos);
        console.log(trucos);
    }
}

function buscarLetraenPalabra(teclaPresionada){
    if(palabraSeleccionada.includes(teclaPresionada)){
        for(let i = 0 ; i<palabraSeleccionada.length;i++){
            if(palabraSeleccionada.charAt(i)==teclaPresionada){
                document.getElementById(i).innerHTML=teclaPresionada;
                document.getElementById(i).removeAttribute("class","esconderpalabra");
                document.getElementById(i).style.border="none";
                letrasAcertadas+=1;
            }
        }
    }else{
        if(!godmode){
            intentos+=1
        }
        divWrongLetters.innerHTML+=teclaPresionada+" ";
    }
    if(letrasAcertadas==palabraSeleccionada.length){
        finDeJuego("VIVO");
        escucharTeclado=false;
    }
    if(intentos >= 6){
        finDeJuego("MUERTO");
        escucharTeclado=false;
    }
}

function verificarTrucos(){
    if(trucos.includes("toasty")){
         if(toasty.style.right=="-150px" && !toastyrun){
            toastyrun=true;
             toasty.style.right="0";
             toastyaudio.play();
             setTimeout(function(){toasty.style.right="-150px"; },490);
             setTimeout(function(){toastyrun=false; },1000);
         }
        trucos="";
    }
    if(trucos.includes("mynameismirtha")){
        godmode = true;
       trucos="";
   }
    
}

function quitarGuiones(){
    arrayLetras = [];
    for(let i=0; i<palabraSeleccionada.length; i++){
        let removeDivHidden = document.getElementById(i);
        divHiddenWord.removeChild(removeDivHidden);
    }
}

function finDeJuego(estado){
    pantallacompleta.style.background="rgba(0,0,0,0.5)"
    cartelDeAlerta.style.top="36%";
    if(estado=="VIVO"){
        viveAudio.play();
        alertaVive.style.display="flex";
        puntos=palabraSeleccionada.length;
        puntosAlertaJuego.innerHTML=puntos;
        if(puntos>puntosmaximos){
            puntosmaximos=puntos;
            spanPuntajemaximo.innerHTML=puntosmaximos;
        }

    }else{
        muereAudio.play();
        alertaMuere.style.display="flex";
        palabraSecretaAlertaJuego.innerHTML=palabraSeleccionada;
    }
}