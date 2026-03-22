let maximo = 200000; // tanque lleno

function sumar(valor) {

    let input = document.getElementById("monto");

    /* si hay texto (ej: "Canceló en bomba") lo resetea */
    let actual = parseInt(input.value);
    if (isNaN(actual)) {
        actual = 0;
    }

    let nuevo = actual + valor;

    if (nuevo > maximo) {
        nuevo = maximo;
    }

    input.value = nuevo;
}

function llenar(){

    let input = document.getElementById("monto");

    input.value = "Canceló en bomba";
}
document.querySelector("form").addEventListener("submit", function(e){

e.preventDefault();

let valorInput = document.getElementById("monto").value;

/* si canceló en bomba → no hacer nada */
if(valorInput === "Canceló en bomba"){
    window.location.href = "indexUsuario.html";
    return;
}

let monto = parseInt(valorInput);

/* si no es número válido */
if(isNaN(monto)){
    return;
}

if(isNaN(monto)){
    alert("No seleccionaste un valor válido");
    return;
}

let saldoActual = localStorage.getItem("saldo");

if(saldoActual === null){
    saldoActual = 0;
}else{
    saldoActual = parseInt(saldoActual);
}

/* VALIDAR si alcanza el dinero */

if(monto > saldoActual){
    alert("No tienes suficiente saldo");
    return;
}

/* RESTAR saldo */

let nuevoSaldo = saldoActual - monto;

localStorage.setItem("saldo", nuevoSaldo);

/* REDIRIGIR */

window.location.href = "indexUsuario.html";

});