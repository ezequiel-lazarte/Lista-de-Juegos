const ul = document.querySelector('#list-1');
const url = "https://free-to-play-games-database.p.rapidapi.com/api/games";
const list_games = {};

data = getResponse(url);

async function getResponse(url) {
    const res = await fetch(url, {
        "method": "GET",
	    "headers": {
            "x-rapidapi-key": "94c5c74304msh6b060db7c2a4341p1f01ecjsnddcc11168a4b",
            "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com"
        }
    });
    if (!res.ok) {
		throw new Error(`HTTP error! status: ${res.status}`);
	}
    let data = await res.json();

    data = await sort_by_id(data);
    mostrar_lista(data, 1, 50);
}