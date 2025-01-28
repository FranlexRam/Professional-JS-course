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

// let boton = document.querySelector("button").addEventListener("click",desactivarPublicidad);
// let mensaje = setTimeout(saludar,5000);

// function saludar() {
//     alert('Gracias por usar nuestro servicio');
// }

// function desactivarPublicidad() {
//     clearTimeout(mensaje)
// }

//Trabajando con OBETOS LITERALES
let peliculas = document.querySelector(".peliculas");
let listadoPeliculas = [
    {
        imagen: 'Amelia.jpeg',
        titulo: 'Amélie (2001)' ,
        descripcion: '"Las diferentes viñetas que ilustran este Montmartre y la tierna, conmovedora historia de amor entre Amélie y Nino (Mathieu Kassovitz) son la prueba de que Jeunet reivindica la realidad a través de los sueños. O lo que es lo mismo, nos dice que solo seremos felices si luchamos por convertirlos en realidad. Eso sí, por encima de cualquier moraleja, "Amelie" es, simplemente, un prodigio de inventiva, una absoluta delicia, un regalo para los ojos, una canción de Charles Trénet hecha película".'
    },{
        imagen: 'Vertigo.jpg',
        titulo: 'Vértigo (De entre los muertos) (1958)',
        descripcion: '"Una de las obras maestras de su director, en la que supo combinar una intriga construida rigurosamente con un sentido casi fantasmágorico de la narración. Desarrolla un proceso de fascinación que se imbrica por varicuetos casi necrofílicos. Su compleja estructura mezcla sensaciones abstractas y hechos concretos con singular naturalidad, en un conjunto tan sugestivo como susceptible de lecturas múltiples".'
    }, {
        imagen: 'Con la muerte en los talones.jpg',
        titulo: 'Con la muerte en los talones (1959)',
        descripcion: '"Uno de los productos más refinados entre los que dirigió Hitchcock, en el que el azar se convierte en motor de una historia elaborada con tanta coherencia como rigor. Su admirable capacidad fabuladora sabe alternar lo fantasioso y lo racional con singular talento. La ironía acaba de redondear los atractivos de esta obra redonda".'
    }, {
        imagen: 'cafarnaum.avif',
        titulo: 'Cafarnaúm (2018)',
        descripcion: '"La originalidad del planteamiento de la trama, en realidad un macguffn, es esa pregunta incómoda que quien más quien menos se ha hecho alguna vez, ¿por qué tiene tantos hijos quien no puede hacerse cargo de ellos? Es lo que mueve a Zain a denunciar a sus padres por haberle dado la vida".'
    }
];
for(let i=0; i < listadoPeliculas.length; i++) {
    peliculas.innerHTML+=`
                <article class="pelicula">
                    <img src="/imagenes/${listadoPeliculas[i].imagen}" alt="Pelicula">
                    <h2 class="tituloPelicula">${listadoPeliculas[i].titulo}</h2>
                    <p>${listadoPeliculas[i].descripcion}</p>
                    <button class="verMas">Ver mas</button>
                </article>
    `;
};
console.log(listadoPeliculas);

// Trabajando con metodos de los arrays - .forEach()
let personajesPopulares = [
    {
        foto: 'Zendaya.jpg',
        nombre: 'Zendaya'
    }, {
        foto: 'Keanu-Reeves.jpeg',
        nombre: 'Keanu Reeves'
    }, {
        foto: 'Ursula Corbero.avif',
        nombre: 'Ursula Corbero'
    }, {
        foto: 'robert_downey_jr12.jpg',
        nombre: 'Robert Downey Jr.'
    }, {
        foto: 'Maisie Williams.jpg',
        nombre: 'Maisie Williams'
    }, {
        foto: 'Tom Holland.jpeg',
        nombre: 'Tom Holland'
    },
];

let personajes = document.querySelector("#personajes");

personajesPopulares.forEach(personaje => {
    personajes.innerHTML+=`
        <article class="personaje">
            <img src="/imagenes/${personaje.foto}" alt="Personaje ">
            <h3 class="tituloPersonaje">${personaje.nombre}</h3>
        </article>
    `
});

let agredecimiento = 'Gracias por visitar mi pagina.';

for (const letra of agredecimiento) {
    console.log(letra);
}

//Trabajando con metodos de los ARRAYS: .map()

let numeros = [10, 20, 30, 40, 50, 60, 70];
let tripleNumeros = numeros.map((triple)=>triple*3);



console.log(numeros);
console.log(tripleNumeros);

peliculas.innerHTML='';

//Nuevo ARRAY
let imagenPeliculas = listadoPeliculas.map(({imagen})=>imagen);

console.log(imagenPeliculas);

for (const imagen of imagenPeliculas) {
    peliculas.innerHTML+=`
        <article class="pelicula">
            <img src="/imagenes/${imagen}" alt="Pelicula">
        </article>
    `
}