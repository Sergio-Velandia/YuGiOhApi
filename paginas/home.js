/**
 * Función que filtra las cartas en el array local por nombre.
 * @param {string} textoBusqueda - El texto introducido por el usuario en el buscador.
 */
function buscadorfuncion(textoBusqueda) {
    if (textoBusqueda.length >= 3) {
        const busquedaMinusculas = textoBusqueda.toLowerCase();
        const filtrados = cartas.filter(card => 
            card.name.toLowerCase().includes(busquedaMinusculas)
        );
        
        let listaHTML = generarLista(filtrados);
        document.getElementById("la-lista").innerHTML = listaHTML;
    } else {
        let listaHTML = generarLista(cartas);
        document.getElementById("la-lista").innerHTML = listaHTML;
    }
}

/**
 * Genera el HTML para mostrar la lista de cartas.
 * @param {Array<Object>} arrayCartas - Array de objetos carta de Yu-Gi-Oh!.
 * @returns {string} - El HTML de la lista de cartas.
 */
function generarLista(arrayCartas) {
    let listaHTML = "";
    for (let i = 0; i < arrayCartas.length; i++) {
        const carta = arrayCartas[i];
        const id = carta.id;
        // Se asume que 'card_images' existe, si no, se usa el placeholder.
        const imagenUrl = carta.card_images && carta.card_images[0] ? carta.card_images[0].image_url : "placeholder.png";
        
        listaHTML += `
        <div class="c-lista-card ygo-${id}" onclick="Detalle('${id}')">
            <p>#${id}</p>
            <img src="${imagenUrl}" width="auto" height="100" loading="lazy" alt="${carta.name}">
            <p class="card-name">${carta.name}</p>
            <p class="card-type">${carta.type || 'N/A'}</p>
        </div>`;
    }

    return listaHTML;
}

/**
 * Renderiza la vista principal (Home) con el buscador y los filtros.
 */
function Home() {
    var root = document.getElementById("root");
    root.innerHTML = "";
    
    // --- BUSCADOR ---
    const buscador = document.createElement("input");
    buscador.classList.add("c-buscador");
    buscador.type = "text";
    buscador.placeholder = "Buscar Carta Yu-Gi-Oh! por nombre...";
    buscador.addEventListener("input", () => {
        buscadorfuncion(buscador.value);
    });

    // --- CONTENEDOR FILTROS ---
    const tiposCartasYGO = [
        "All", 
        "Normal Monster", 
        "Effect Monster", 
        "Fusion Monster", 
        "Synchro Monster", 
        "Xyz Monster", 
        "Link Monster", 
        "Ritual Monster", 
        "Spell Card", 
        "Trap Card"
    ];

    const contenedorFiltro = document.createElement("div");
    contenedorFiltro.classList.add("tipos-container");

    for (let i = 0; i < tiposCartasYGO.length; i++) {
        const tipo = tiposCartasYGO[i];
        const btn = document.createElement("button");
        btn.textContent = tipo;
        
        btn.addEventListener("click", () => {
            FiltroConexion(tipo); 
        });

        contenedorFiltro.appendChild(btn);
    }


    // --- CONTENEDOR LISTA ---
    const listaHTML = generarLista(cartas);
    var contenedorLista = document.createElement("div");
    contenedorLista.classList.add("c-contenedor-lista"); 
    contenedorLista.id = "la-lista"; 
    contenedorLista.innerHTML = listaHTML;

    // --- AGREGAR CONTENEDORES al root ---
    root.appendChild(buscador);
    root.appendChild(contenedorFiltro);
    root.appendChild(contenedorLista);
}