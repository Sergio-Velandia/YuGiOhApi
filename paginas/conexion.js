let cartas = [];

const YUGIOH_API_URL = "https://db.ygoprodeck.com/api/v7/cardinfo.php";

/**
 * Conexión para obtener la lista de cartas, con filtro opcional.
 * @param {string} filtroTipo - El tipo de carta a filtrar (ej: 'Spell Card', 'Trap Card'). Usa 'All' para todas.
 * @returns {Promise<Array<Object>>} - Una promesa que resuelve con la lista de cartas.
 */
async function conexionLista(filtroTipo) {
    let url = YUGIOH_API_URL;

    if (filtroTipo !== "All") {
        url = `${YUGIOH_API_URL}?type=${encodeURIComponent(filtroTipo)}`;
    }

    try {
        const res = await fetch(url);
        const data = await res.json();
        
        // La API de Yu-Gi-Oh! devuelve las cartas en la propiedad 'data'.
        return data.data || [];

    } catch (error) {
        console.error("Error al conectar con la API de Yu-Gi-Oh!:", error);
        return [];
    }
}

/**
 * Cargar todas las cartas al iniciar.
 */
async function General() {
    if (cartas.length === 0) {
        // Carga inicial (ten en cuenta que "All" trae miles de cartas)
        cartas = await conexionLista("All"); 
    }
    Home();
}

General()

/**
 * Filtra, obtiene y renderiza la lista de cartas según el tipo.
 * @param {string} Elfiltro - El tipo de carta a filtrar.
 */
async function FiltroConexion(Elfiltro) {
    const listaContainer = document.getElementById("la-lista");
    listaContainer.innerHTML = "Cargando cartas...";

    // Obtener las cartas filtradas por tipo de la API
    const cartasFiltradas = await conexionLista(Elfiltro); 
    
    // Reemplazar el array global 'cartas' con los resultados filtrados
    cartas = cartasFiltradas; 

    // Generar y renderizar el HTML de la lista
    const listaHTML = generarLista(cartas); 

    if (cartas.length > 0) {
        listaContainer.innerHTML = listaHTML;
    } else {
        listaContainer.innerHTML = `No se encontraron cartas para el filtro: **${Elfiltro}**`;
    }
}