const ul = document.querySelector('#list-1');
const url = "https://free-to-play-games-database.p.rapidapi.com/api/games";

fetch(url, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "94c5c74304msh6b060db7c2a4341p1f01ecjsnddcc11168a4b",
		"x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com"
	}
})
.then(datos => {return datos.json()})
.then(games => {
    games.forEach(juego => {
        const li = document.createElement('li');
        const button = document.createElement('button');

        li.setAttribute('id', juego.id);
        li.className = "li list-group-item my-1 rounded-3 border-1 border-dark text-light bg-dark bg-gradient";
        button.className = "button-li btn btn-outline-danger float-end";
        li.innerText = juego.title;
        button.innerText = 'Ver Mas';
        button.addEventListener('click', () => {
            window.location.href = `./juego.html?id=${juego.id}`;
        });
        li.appendChild(button);
        ul.appendChild(li);
    });
})
.catch(error => {console.log(error)});

