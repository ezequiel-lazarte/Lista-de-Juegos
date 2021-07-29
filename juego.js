const contenedor1 = document.querySelector('.con-3');
const contenedor2 = document.querySelector('.con-4');
const contenedor3 = document.querySelector('.con-5');
const contenedor4 = document.querySelector('.con-6');
const contenedor5 = document.querySelector('.con-7');

const getUrl = new URLSearchParams(window.location.search);
const id = getUrl.get('id'); 
const url = "https://free-to-play-games-database.p.rapidapi.com/api/games";

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
    const descripcion = document.createElement('p');
    const genero = document.createElement('p');
    const plataforma = document.createElement('p');
    const fecha = document.createElement('p');

    img.src = juegos[id].thumbnail;
    img.alt = juegos[id].title;
    img.className = "img-juego img-thumbnai";
    descripcion.innerText = juegos[id].short_description;
    descripcion.className = "descripcion";
    genero.innerText = juegos[id].genre;
    genero.className = "genero";
    plataforma.innerText = juegos[id].platform;
    plataforma.className = "plataforma";
    fecha.innerText = juegos[id].release_date;
    fecha.className = "fecha";

    contenedor1.appendChild(img);
    contenedor2.appendChild(descripcion);
    contenedor3.appendChild(fecha);
    contenedor4.appendChild(plataforma);
    contenedor5.appendChild(genero);
})
.catch(error => {console.log(error)})