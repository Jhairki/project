// navbar.js
const navbarHTML = `
    <nav class="custom-navbar">
        <div class="logo">
            <a href="/pages/inicio/index.html">
                <img src="/assets/images/general web/MARCA FINAL-06 3.png" alt="Logo">
            </a>
        </div>
        <div class="menu">
            <a href="/pages/inicio/index.html" class="nav-item">Inicio</a>
            <a href="/pages/galeria/index.html" class="nav-item">Galería</a>
            <a href="/pages/obras/index.html" class="nav-item">Obras</a>
            <a href="/pages/artistas/index.html" class="nav-item">Artistas</a>
            <a href="/pages/nosotros/index.html" class="nav-item">Nosotros</a>
            <a href="/pages/contacto/index.html" class="nav-item">Contacto</a>
        </div>
        <div class="search">
            <button class="search-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
            </button>
            <input type="text" placeholder="Buscar">
        </div>
    </nav>
`;

// Función para cargar el navbar si no está ya cargado
function loadNavbar() {
    if (!document.getElementById("navbar")) {
        const navbarContainer = document.createElement("div");
        navbarContainer.id = "navbar";
        navbarContainer.innerHTML = navbarHTML;
        document.body.insertBefore(navbarContainer, document.body.firstChild);
    }
}

loadNavbar();
