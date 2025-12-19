# YuGiOhApi
YuGiOhAPI es una aplicación web interactiva diseñada para los entusiastas del juego de cartas Yu-Gi-Oh! La plataforma permite explorar una vasta base de datos de cartas consumiendo una API externa, ofreciendo funcionalidades dinámicas y una interfaz personalizada.

-HTML5	Estructura semántica de la página principal.

-CSS3	Diseño visual, responsividad y estilos personalizados.

-JavaScript (ES6+)	Lógica de negocio, consumo de API y manipulación del DOM.

-API Externa	Fuente de datos para las cartas de Yu-Gi-Oh!

YuGiOhAPI/
├── .vscode/                # Configuración del editor (settings.json)
├── paginas/                # Módulos de JavaScript por sección
│   ├── PaginaOriginal.js   # Lógica base o inicial del proyecto
│   ├── coleccion.js        # Gestión y visualización de la colección completa
│   ├── conexion.js         # Configuración de peticiones Fetch/API
│   ├── detalle.js          # Lógica para mostrar información de una carta específica
│   ├── favoritos.js        # Sistema de guardado y gestión de favoritos
│   ├── home.js             # Lógica de la pantalla de inicio
│   └── informativa.js      # Sección de información general o ayuda
├── index.html              # Punto de entrada principal
├── script.js               # Script principal (orquestador)
├── styles.css              # Estilos globales
└── README.md               # Documentación del proyecto


# Funcionalidades principales
- Consulta de API: Conexión en tiempo real para obtener datos actualizados de las cartas (nombres, descripciones, ataques, imágenes).

- Elementos Aleatorios: Función para descubrir nuevas cartas de forma azarosa, ideal para conocer cartas poco comunes.

- Sistema de Favoritos: Permite a los usuarios marcar cartas y guardarlas (posiblemente usando localStorage) para verlas más tarde.

- Detalle Extendido: Visualización detallada de cada carta, incluyendo sus atributos y efectos.

- Navegación Modular: Gracias a la estructura en la carpeta paginas, la aplicación maneja diferentes vistas de forma organizada mediante JavaScript.

# Configuracion y uso

- Clonar el repositorio:
git clone https://github.com/tu-usuario/YuGiOhApi.git

- Ejecución: Al ser un proyecto de frontend puro, solo necesitas abrir el archivo index.html en cualquier navegador moderno o utilizar la extensión Live Server en VS Code.

- Configuración de VS Code: El archivo .vscode/settings.json ya incluye las preferencias recomendadas para mantener la consistencia del código en este entorno de desarrollo.

