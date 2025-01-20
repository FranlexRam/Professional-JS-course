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

hora.innerHTML=` Hora: ${fechaActual.getHours()}:${fechaActual.getMinutes()}:${fechaActual.getSeconds()}`