// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, escribe un nombre válido.");
        return;
    }

    if (amigos.includes(nombre)) {
        alert("Ese nombre ya está en la lista.");
        return;
    }

    amigos.push(nombre);

    input.value = "";

    actualizarLista();
}

function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    const resultado = document.getElementById("resultado");

    if (!Array.isArray(amigos) || amigos.length === 0) {
        resultado.innerHTML = "<li>Primero agrega al menos un nombre.</li>";
        return;
    }

    const indice = Math.floor(Math.random() * amigos.length);
    const seleccionado = amigos[indice];

    resultado.innerHTML = ""; 
    const li = document.createElement("li");
    li.textContent = `Tu amigo secreto es: ${seleccionado}`;
    resultado.appendChild(li);
}