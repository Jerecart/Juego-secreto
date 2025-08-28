
// Ejercicio: Adivina el número secreto
// Crea una página web que muestre un número secreto entre 1 y 10.
let numeroSecreto = 0;
let intentos = 1;
let listaNumerosSorteados = [];


// Muestra el número secreto en la consola del navegador.
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    if (elementoHTML) {
        elementoHTML.innerHTML = texto;
    }
    return;
}

// Crea un botón que al hacer click muestre una alerta con el mensaje "click desde el botón".
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);

    console.log(numeroSecreto);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento("p", `¡Acertaste el número en ${intentos} ${intentos === 1 ? 'intento' : 'intentos'}! El número secreto es: ${numeroSecreto}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento("p", "El número secreto es menor");
        } else {
            asignarTextoElemento("p", "El número secreto es mayor");
        }
        intentos++;
        limpiartCaja();
    }
    return;
}

function limpiartCaja() {
    let valorCaja = document.querySelector("#valorUsuario");
    valorCaja.value = "";
}

// Crea un botón que al hacer click muestre una alerta con el número secreto.
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * 10) + 1;
     
    if (listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
    } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
}

function condicionesIniciales() {
    asignarTextoElemento("h1", "Adivina el número secreto");
    asignarTextoElemento("p", "Adivina el número secreto entre 1 y 10");
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    document.getElementById("reiniciar").setAttribute("disabled", "true");
}

function reiniciarJuego() {
    // Limpiar caja
    limpiartCaja();
    // Reiniciar condiciones iniciales
    condicionesIniciales();
document.querySelector("#reiniciar").setAttribute("disabled", "true");

}

condicionesIniciales();

