let dias = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'];
let meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];

let fecha = document.getElementById("fecha");
let hora = document.getElementById("hora");

let fechaActual = new Date();
console.log(fechaActual);

let dia = fechaActual.getDate();
let diaLetras = fechaActual.getDay();
let mes = fechaActual.getMonth();
let anio = fechaActual.getFullYear();

fecha.innerHTML=`Fecha: ${dias[diaLetras]} ${dia} de ${meses[mes]} del ${anio}`;

function actualizarHora() {
    const ahora = new Date();
    const horas = ahora.getHours().toString().padStart(2, '0');
    const minutos = ahora.getMinutes().toString().padStart(2, '0');
    const segundos = ahora.getSeconds().toString().padStart(2, '0')
    hora.textContent=` Hora: ${horas}:${minutos}:${segundos}`;
}
// Actualizar la hora cada segundo
setInterval(actualizarHora, 1000);
// Inicializar el reloj al cargar la página
actualizarHora();


// Clase 3.1: TimeRanges, setTimeout , clearTimeout
let boton = document.querySelector("button").addEventListener("click",desactivarPublicidad);
let mensaje = setTimeout(saludar,5000);

function saludar() {
    alert('Gracias por usar nuestro servicio');
}

function desactivarPublicidad() {
    clearTimeout(mensaje)
}
