// footer.js
const footerHTML = `
    <footer class="custom-footer">
        <div class="footer-container">
            <div class="section logo">
                <img src="https://via.placeholder.com/80" alt="Logo">
                <h1>GALERÍA DE ARTE BOLIVIANO</h1>
            </div>

            <div class="section contacts">
                <h3>CONTÁCTANOS</h3>
                <a href="mailto:gab.bolivian@gmail.com">
                    <i class="bi bi-envelope-fill"></i> gab.bolivian@gmail.com
                </a>
                <a href="https://instagram.com">
                    <i class="bi bi-instagram"></i> gab_artbolivian
                </a>
                <a href="https://facebook.com">
                    <i class="bi bi-facebook"></i> Galería De Arte Boliviano
                </a>
            </div>

            <div class="section menu">
                <h3>MENÚ</h3>
                <ul>
                    <li><a href="#">Galería</a></li>
                    <li><a href="#">Obras</a></li>
                    <li><a href="#">Artistas</a></li>
                    <li><a href="#">Nosotros</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>
            </div>

            <div class="section cta">
                <h3>¿Quieres exponer en esta galería?</h3>
                <p>
                    GALERÍA DE ARTE BOLIVIANO es un espacio que busca democratizar el acceso al arte, ofreciendo a los artistas un
                    lugar para desarrollarse y conectar con coleccionistas y amantes del arte.
                </p>
                <a href="#">Llena el formulario</a>
            </div>
        </div>

        <div class="footer">
            <hr class="footer-line">
            <p>"ABRE LA PUERTA AL ARTE VIRTUAL: UN MUNDO DE INSPIRACIÓN A TU ALCANCE."</p>
        </div>
    </footer>
`;

function loadFooter() {
    if (!document.getElementById("footer")) {
        const footerContainer = document.createElement("div");
        footerContainer.id = "footer";
        footerContainer.innerHTML = footerHTML;
        document.body.appendChild(footerContainer);
    }
}

loadFooter();
