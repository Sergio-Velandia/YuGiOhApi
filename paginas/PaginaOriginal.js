/**
 * Renderiza una página original con información didáctica sobre la anatomía 
 * de una carta de monstruo de Yu-Gi-Oh!.
 */
function PaginaOriginal() {
    const root = document.getElementById("root");
    root.innerHTML = ""; // Limpiar la vista anterior

    const originalHTML = `
    <section class="c-original-ygo">
        <h1 class="titulo-original">Anatomía de la Carta: ¡Duelo Explicado!</h1>
        <p class="subtitulo-original">Comprende los elementos clave de las Cartas de Monstruo que ves en tu colección.</p>
        
        <div class="info-ilustrada">
            <div class="ilustracion-container">
                <img src="https://images.ygoprodeck.com/images/cards/37578013.jpg" alt="Carta de Monstruo de Yu-Gi-Oh!" class="carta-ejemplo">
            </div>

            <div class="puntos-clave-container">
                <h2>Puntos Clave Explicados</h2>
                <div class="punto-clave">
                    <h3>1. Nivel/Rango (⭐)</h3>
                    <p>Indica la fuerza o complejidad de Invocación. Determina si se requiere un Sacrificio (Tributo). Se ubica en la parte superior derecha de la carta.</p>
                </div>
                <div class="punto-clave">
                    <h3>2. Tipo de Monstruo y Clase</h3>
                    <p>Muestra el **Tipo** (Guerrero, Dragón, Lanzador de Conjuros, etc.) y la **Clase** (Normal, Efecto, Fusión, Sincronía, etc.). Es esencial para efectos de cartas.</p>
                </div>
                <div class="punto-clave">
                    <h3>3. Atributo (💧🔥🌳)</h3>
                    <p>Indica la afinidad elemental: **LUZ, OSCURIDAD, TIERRA, AGUA, FUEGO, VIENTO** o **DIVINO**. Es clave para muchas estrategias de Deck.</p>
                </div>
                <div class="punto-clave">
                    <h3>4. ATK / DEF</h3>
                    <p>Los valores de Ataque (ATK) y Defensa (DEF). Son cruciales para determinar el resultado del combate en la Fase de Batalla.</p>
                </div>
            </div>
        </div>
        
        <div class="info-seccion-tipo">
            <h2>Sistema de Atributos</h2>
            <p>Cada atributo tiene un color y una función estratégica:</p>
            <ul class="lista-atributos">
                <li style="border-left-color: gold;">**LUZ / LIGHT:** Enfocado en protección y control.</li>
                <li style="border-left-color: darkred;">**OSCURIDAD / DARK:** Enfocado en la destrucción y el cementerio.</li>
                <li style="border-left-color: brown;">**TIERRA / EARTH:** Enfocado en la defensa y el control de posición.</li>
                <li style="border-left-color: blue;">**AGUA / WATER:** Enfocado en el control de campo y el bloqueo.</li>
                <li style="border-left-color: red;">**FUEGO / FIRE:** Enfocado en daño directo y recuperación.</li>
                <li style="border-left-color: lightgreen;">**VIENTO / WIND:** Enfocado en movimientos rápidos y el retorno de cartas.</li>
            </ul>
        </div>
        
    </section>
    `;

    root.innerHTML = originalHTML;
}