function Favoritos(){
    let favoritosYGO = JSON.parse(localStorage.getItem("favoritosYGO")) || [];
    const root = document.getElementById("root");
    root.innerHTML = ""; 

    if (favoritosYGO.length === 0) {
        root.innerHTML = "¡Aún no has agregado ninguna carta a tus favoritos! ";
    } else {
        // Se llama a la función auxiliar para obtener todos los detalles de la API
        cargarYRenderizarFavoritos(favoritosYGO, root);
    }
}