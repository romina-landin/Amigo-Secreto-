// Inicio del proyecto Amigo secreto 

// Arreglo donde se almacenarán los participantes
let grupoParticipantes = [];

// Conexión con el <ul> en el HTML que mostrará la lista
let contenedorLista = document.getElementById('listaAmigos'); 
// Nota: un <ul> o <ol> no tiene atributo .value

// Elemento donde se mostrará el resultado del sorteo
let cajaResultado = document.getElementById('resultado'); 

// Función para añadir un nuevo participante desde el input
function registrarParticipante() {
    let nombreIngresado = document.getElementById('amigo').value.trim(); // Captura y limpia espacios extra
    
    if (nombreIngresado === "") { 
        alert("Debe escribir un nombre válido"); // Evita entradas vacías
        return; // Sale de la función si no hay nombre
    }

    grupoParticipantes.push(nombreIngresado); // Agregar nombre al arreglo
    contenedorLista.innerHTML = ""; // Limpiar la lista antes de reconstruirla

    // Crear dinámicamente los elementos <li> de la lista en el HTML
    grupoParticipantes.forEach(participante => {
        let item = document.createElement('li');
        item.textContent = participante;
        contenedorLista.appendChild(item);
    });

    document.getElementById('amigo').value = ""; // Vaciar el campo de entrada
}

// Función para elegir al azar el amigo secreto
function seleccionarSecreto() {
    if (grupoParticipantes.length < 2) { 
        alert("Agregue al menos dos participantes para continuar");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * grupoParticipantes.length); 
    let participanteSecreto = grupoParticipantes[indiceAleatorio];

    // Mostrar el nombre seleccionado en pantalla
    cajaResultado.textContent = `El amigo secreto es: ${participanteSecreto}`;
}
