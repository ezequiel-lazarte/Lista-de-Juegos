const contenedor1 = document.querySelector('.con-3');
const contenedor2 = document.querySelector('.con-4');
const contenedor3 = document.querySelector('.con-5');
const contenedor4 = document.querySelector('.con-6');
const contenedor5 = document.querySelector('.con-7');
const btnVolver = document.querySelector('.btn-1');

const getUrl = new URLSearchParams(window.location.search);
const id = getUrl.get('id');
const url = "https://free-to-play-games-database.p.rapidapi.com/api/games";

btnVolver.addEventListener('click', () => {
    window.location.href = `..`;
})

fetch(url, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "94c5c74304msh6b060db7c2a4341p1f01ecjsnddcc11168a4b",
		"x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com"
	}
})
.then(data => {return data.json()})
.then(juegos => {
    const img = document.createElement('img');
    const titulo = document.createElement('p');
    const descripcion = document.createElement('p');
    const genero = document.createElement('p');
    const fecha = document.createElement('p');


    img.src = juegos[id].thumbnail;
    img.alt = juegos[id].title;
    img.className = "img-juego img-thumbnai";
    titulo.innerText = juegos[id].title;
    titulo.className = "parrafo fs-4";
    descripcion.innerText = juegos[id].short_description;
    descripcion.className = "parrafo";
    genero.innerText = `${juegos[id].platform}, ${juegos[id].genre}`;
    genero.className = "parrafo";
    fecha.innerText = juegos[id].release_date;
    fecha.className = "parrafo";

    contenedor1.appendChild(img);
    contenedor2.appendChild(descripcion);
    contenedor3.appendChild(titulo);
    contenedor3.appendChild(genero);
    contenedor5.appendChild(fecha);
})
.catch(error => {console.log(error)})