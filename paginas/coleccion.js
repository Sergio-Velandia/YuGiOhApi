// 🚩 paginas/coleccion.js

// Las variables globales deben ser inicializadas AQUÍ si dependen de este archivo
// Nota: 'cartas' DEBE estar cargada por 'conexion.js' antes que este archivo.
var misIDsObtenidos = JSON.parse(localStorage.getItem("misIDsYGO")) || [];
let totalCartas = 0; // Se inicializará en Coleccion()

// -------------------------------------------------------------------
// FUNCION PARA OBTENER CARTAS ALEATORIAS (Aleatorios)
// -------------------------------------------------------------------

/**
 * Simula la obtención de 4 cartas aleatorias y las añade a la colección si son nuevas.
 */
function Aleatorios() {
    // Es crucial que 'cartas' exista. Si no, salimos.
    if (!cartas || cartas.length === 0) {
        alert("Error: Las cartas no han sido cargadas. Vuelve al Home.");
        return;
    }

    document.getElementById("nuevos").innerHTML = "";
    
    let cartasAleatoriasHTML = "";
    const numCartasAObtener = 4;
    
    for (let i = 0; i < numCartasAObtener; i++) {
        let indiceAleatorio = Math.floor(Math.random() * cartas.length); 
        
        const cartaObtenida = cartas[indiceAleatorio];
        const idCarta = cartaObtenida.id;
        const nombreCarta = cartaObtenida.name;
        const imagenUrl = cartaObtenida.card_images && cartaObtenida.card_images[0] ? cartaObtenida.card_images[0].image_url : "placeholder.png";

        cartasAleatoriasHTML += `
            <div class="c-lista-card c-un_aleatorio" onclick="Detalle('${idCarta}')">
                <p>#${idCarta}</p>
                <img src="${imagenUrl}" alt="${nombreCarta}" width="60" height="90">
                <p>${nombreCarta}</p>
            </div>`;
        
        misIDsObtenidos = JSON.parse(localStorage.getItem("misIDsYGO")) || [];
        const yaExiste = misIDsObtenidos.includes(idCarta);

        if (!yaExiste) {
            misIDsObtenidos.push(idCarta);
            localStorage.setItem("misIDsYGO", JSON.stringify(misIDsObtenidos));
            
            const contenedorCuadro = document.getElementById(`c-un-cuadro-${idCarta}`);
            if(contenedorCuadro){
                contenedorCuadro.innerHTML = `
                <div onclick="Detalle('${idCarta}')">
                    <img src="${imagenUrl}" width="auto" height="45" loading="lazy" alt="${nombreCarta}">
                    <p>${nombreCarta}</p>
                </div>`;
                contenedorCuadro.classList.add("c-mios-card");
            }
        }
    }

    document.getElementById("nuevos").innerHTML += cartasAleatoriasHTML;
    document.getElementById("contador").innerHTML = `${misIDsObtenidos.length} / ${totalCartas}`;
}

// -------------------------------------------------------------------
// FUNCION PARA VISUALIZAR LA COLECCIÓN (Coleccion)
// -------------------------------------------------------------------

/**
 * Renderiza la vista de la colección de cartas obtenidas (álbum y botón de aleatorios).
 */
function Coleccion(){
    const root = document.getElementById("root");
    root.innerHTML = "";
    
    // Verificación de la dependencia: 'cartas' debe venir de 'conexion.js'
    if (typeof cartas === 'undefined' || cartas.length === 0) {
        root.innerHTML = "<p>Cargando datos. Vuelve al Home e intenta de nuevo, o espera a que General() se complete.</p>";
        return;
    }
    
    totalCartas = cartas.length; 
    misIDsObtenidos = JSON.parse(localStorage.getItem("misIDsYGO")) || [];

    // --- CONTADOR ---
    const contador = document.createElement("p");
    contador.textContent = `${misIDsObtenidos.length} / ${totalCartas}`;
    contador.id = "contador";

    // --- BOTÓN PARA OBTENER CARTAS ALEATORIAS ---
    const boton = document.createElement("button");
    boton.textContent = "Abrir 4 Sobres (Cartas)";
    // El listener llama a la función sin problemas de 'ReferenceError' porque ya está definida arriba.
    boton.addEventListener("click", () => {
        Aleatorios(); 
    });


    // --- SECCIÓN DE NUEVAS CARTAS (Simulación de paquete) ---
    const capturaAleatorea = document.createElement("section");
    capturaAleatorea.classList.add("c-lista-nuevas");
    capturaAleatorea.id = "nuevos";


    // --- ÁLBUM/ÁREA DE COLECCIÓN ---
    const seccionColeccion = document.createElement("section");
    seccionColeccion.classList.add("c-lista-album");

    let cuadrosColeccion = "";
    
    for (let i = 0; i < totalCartas; i++) {
        const cartaBase = cartas[i];
        const idCarta = cartaBase.id;
        const nombreCarta = cartaBase.name;
        const imagenUrl = cartaBase.card_images && cartaBase.card_images[0] ? cartaBase.card_images[0].image_url : "placeholder.png";

        if(misIDsObtenidos.includes(idCarta)){
            cuadrosColeccion += `
            <div class="c-un-cuadro c-mios-card" id="c-un-cuadro-${idCarta}" onclick="Detalle('${idCarta}')">
                <img src="${imagenUrl}" width="auto" height="45" loading="lazy" alt="${nombreCarta}">
                <p>${nombreCarta}</p>
            </div>`;
        } else {
            cuadrosColeccion += `
            <div class="c-un-cuadro" id="c-un-cuadro-${idCarta}">
                <p>#${idCarta}</p>
            </div>`;
        }
    }
    seccionColeccion.innerHTML = cuadrosColeccion;

    // --- AÑADIR ELEMENTOS AL ROOT ---
    root.appendChild(contador);
    root.appendChild(boton);
    root.appendChild(capturaAleatorea);
    root.appendChild(seccionColeccion);
}