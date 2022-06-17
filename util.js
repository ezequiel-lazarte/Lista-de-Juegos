let sort_by_id = (list) => {
    return list.sort((element1, element2) => {
        return element1.id - element2.id;
    })
}

let mostrar_lista = (list, begin, end) => {
    let cont = begin;
    list.forEach(element => {
        if(cont > end ) return;
        const li = document.createElement('li');
        const button = document.createElement('button');

        li.setAttribute('id', element.id);
        li.className = "li list-group-item my-1 rounded-3 border-1 border-dark text-light bg-dark bg-gradient";
        button.className = `button-li${element.id} btn btn-outline-danger float-end`;
        li.innerText = element.title;
        button.innerText = 'Ver Mas';
        button.addEventListener('click', () => {
            window.location.href = `./juego.html?id=${element.id}`;
        });
        li.appendChild(button);
        ul.appendChild(li);

        cont++;
    });
}