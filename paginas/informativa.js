/**
 * Renderiza la vista informativa/acerca de la aplicación de Yu-Gi-Oh!.
 */
function Informativa() {
    const root = document.getElementById("root");
    root.innerHTML = ""; // Limpiar la vista anterior

    const infoHTML = `
    <section class="c-informativa-ygo">
        <h1 class="titulo-ygo">Yu-Gi-Oh! Deck Builder & Collector</h1>
        <p class="subtitulo-ygo">Tu herramienta digital para explorar y coleccionar el universo Duelo de Monstruos.</p>
        
        <div class="info-seccion">
            <h2>Acerca de la Aplicación</h2>
            <p>Esta aplicación web fue diseñada como un proyecto de demostración para integrar la API pública de Yu-Gi-Oh! (YGOPRODeck) y aplicar conceptos fundamentales de desarrollo Frontend (HTML, CSS y JavaScript Vanilla).</p>
        </div>
        
        <div class="info-seccion">
            <h2>Características Principales</h2>
            <ul>
                <li> **Inicio (Home):** Explora miles de cartas, filtra por Tipo de Carta (Monstruo, Mágica, Trampa, etc.) y usa el buscador de nombres.</li>
                <li> **Favoritos:** Guarda y gestiona tus cartas preferidas para construir tus Decks ideales.</li>
                <li> **Mi Colección:** Simula la apertura de sobres para obtener cartas aleatorias y construye tu álbum digital.</li>
                <li> **Detalle de Carta:** Visualiza el arte, descripción, ATK/DEF, Nivel y más detalles específicos de cada carta.</li>
            </ul>
        </div>
        
        <div class="info-seccion">
            <h2>Tecnología Utilizada</h2>
            <p>La aplicación utiliza el stack clásico de la web:</p>
            <ul>
                <li>**HTML5:** Estructura semántica de las vistas.</li>
                <li>**CSS3:** Estilizado moderno y modular.</li>
                <li>**JavaScript (ES6+):** Lógica de navegación, manipulación del DOM, gestión de datos (localStorage) y consumo de API.</li>
                <li>**API:** <a href="https://ygoprodeck.com/api-guide/" target="_blank">YGOPRODeck API v7</a>.</li>
            </ul>
        </div>
        
        <footer class="info-footer">
            <p>&copy; ${new Date().getFullYear()} Proyecto de Demostración. Datos provistos por Konami/YGOPRODeck.</p>
        </footer>
    </section>
    `;

    root.innerHTML = infoHTML;
}