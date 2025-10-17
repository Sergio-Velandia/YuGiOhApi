let esFavorito = false;

function toggleFavorito(paramid, paramname) {
    // Usamos 'favoritosYGO'
    let favoritos = JSON.parse(localStorage.getItem("favoritosYGO")) || [];
    let existe = false

    // Verificar si ya está guardada usando el ID
    if (favoritos.some(card => card.id.toString() === paramid.toString())) {
        existe = true;
    }

    if (existe) {
        // Quitar
        favoritos = favoritos.filter(card => card.id.toString() !== paramid.toString());
        esFavorito = false;
    } else {
        // Agregar
        favoritos.push({
            id: paramid, 
            name: paramname,
            url: `https://db.ygoprodeck.com/api/v7/cardinfo.php?id=${paramid}` 
        });
        esFavorito = true;
    }

    localStorage.setItem("favoritosYGO", JSON.stringify(favoritos));

    // Actualizar el icono en pantalla
    const boton = document.querySelector(`#corazon-${paramid}`);
    if (boton) boton.textContent = esFavorito ? "⭐" : "☆"; 
}

async function Detalle(parametro) {
    const root = document.getElementById("root");
    root.innerHTML = "";
    
    // Conexión a la API de Yu-Gi-Oh! por ID
    const YUGIOH_DETAIL_URL = `https://db.ygoprodeck.com/api/v7/cardinfo.php?id=${parametro}`;
    const res = await fetch(YUGIOH_DETAIL_URL);
    const data = await res.json();

    const carta = data.data && data.data[0]; 

    if (!carta) {
        root.innerHTML = `<p>Error: No se encontró la carta con ID ${parametro}.</p>`;
        return;
    }

    // Revisar si esta Carta ya está en favoritos
    const favoritos = JSON.parse(localStorage.getItem("favoritosYGO")) || [];
    esFavorito = favoritos.some(card => card.id.toString() === carta.id.toString());
    
    // Extracción de datos de la carta
    const nombreCarta = carta.name;
    const idCarta = carta.id;
    const imagenUrl = carta.card_images && carta.card_images[0] ? carta.card_images[0].image_url : "placeholder.png";
    const tipoCarta = carta.type; 
    const descripcion = carta.desc;
    
    const raza = carta.race || "N/A"; 
    const nivel = carta.level || "N/A";
    const atributo = carta.attribute || "N/A"; 
    const atk = carta.atk !== undefined ? carta.atk : "N/A";
    const def = carta.def !== undefined ? carta.def : "N/A";

    const detalleHTML = `
    <section class="c-detalle-ygo">
      <h2>${nombreCarta} - #${idCarta}</h2>
      <img src="${imagenUrl}" alt="${nombreCarta}" height="200" width="auto">
      
      <div class="c-detalles-info">
        <p><strong>Tipo de Carta:</strong> <span>${tipoCarta}</span></p>
        <p><strong>Raza/Tipo:</strong> <span>${raza}</span></p>
        <p><strong>Atributo:</strong> <span>${atributo}</span></p>
        
        ${(tipoCarta.includes("Monster")) ? `
          <p><strong>Nivel/Rango:</strong> ${nivel}</p>
          <p><strong>ATK / DEF:</strong> ${atk} / ${def}</p>
        ` : ''}

        <p class="descripcion">${descripcion}</p>
      </div>

      <button id="btn-favorito"> 
        <span id="corazon-${idCarta}">${esFavorito ? '⭐' : '☆'}</span> Agregar a Deck Favorito
      </button>
    </section>
  `;

    root.innerHTML = detalleHTML;

    // Asignación del evento DESPUÉS de inyectar el HTML (SOLUCIÓN AL ERROR DE SINTAXIS)
    const btnFavorito = document.getElementById("btn-favorito");
    if (btnFavorito) {
        btnFavorito.addEventListener('click', () => {
            toggleFavorito(idCarta, nombreCarta); 
        });
    }
}

// -------------------------------------------------------------------
// FUNCIONES DE VISTA FAVORITOS
// -------------------------------------------------------------------

/**
 * Función auxiliar para obtener los detalles completos de las cartas favoritas 
 * antes de renderizarlas (necesario para la imagen y tipo).
 */
async function cargarYRenderizarFavoritos(listaSimpleFavoritos, contenedor) {
    contenedor.innerHTML = "Cargando detalles de tus cartas favoritas...";
    
    const promesasDetalle = listaSimpleFavoritos.map(card => 
        fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?id=${card.id}`)
            .then(res => res.json())
            .then(data => data.data ? data.data[0] : null)
            .catch(() => null)
    );

    const cartasCompletas = (await Promise.all(promesasDetalle)).filter(c => c !== null);
    
    if (cartasCompletas.length > 0) {
        contenedor.innerHTML = generarLista(cartasCompletas);
    } else {
        contenedor.innerHTML = "No se pudieron cargar los detalles de las cartas favoritas.";
    }
}