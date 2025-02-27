const footerHTML = `
    <footer class="custom-footer">
        
        <div class="footer-container">
            <div class="row">
                
                <div class="col-md-3 section logo-section">
                    <a href="/pages/inicio/index">
                        <img src="/assets/images/general web/marca en negativo-09.png" alt="Logo Galería de Arte">
                    </a>
                </div>

                <!-- Contact Section -->
                <div class="col-md-3 section">
                    <h3>CONTÁCTANOS</h3>
                    <div class="contact-links">
                        <a href="mailto:gab.bolivian@gmail.com">
                            <div class="icon-container">
                                <svg class="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                </svg>
                            </div>
                            gab.bolivian@gmail.com
                        </a>
                        <a href="https://www.instagram.com/gab_artbolivian/?fbclid=IwZXh0bgNhZW0CMTAAAR10e1o7QEIdyrS0Z13k5YPWy29UsbftvORzuq4lRHDejM8J0ctkfBO_4Kc_aem_jCkTdZDs4yFhIaPyXs3bSw#">
                            <div class="icon-container">
                                <svg class="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <rect x="2" y="2" width="20" height="20" rx="5"/>
                                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01"/>
                                </svg>
                            </div>
                            gab_artbolivian
                        </a>
                        <a href="https://www.facebook.com/ArteDeBolivia?locale=es_LA">
                            <div class="icon-container">
                                <svg class="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                                </svg>
                            </div>
                            Galería De Arte Boliviano
                        </a>
                    </div>
                </div>

                <!-- Menu Section -->
                <div class="col-md-3 section">
                    <h3>MENÚ</h3>
                    <ul class="menu-links">
                        <li><a href="/pages/galeria/index.html">Galería</a></li>
                        <li><a href="/pages/obras/index.html">Obras</a></li>
                        <li><a href="/pages/artistas/index.html">Artistas</a></li>
                        <li><a href="/pages/nosotros/index.html">Nosotros</a></li>
                        <li><a href="/pages/contacto/index.html">Contacto</a></li>
                    </ul>
                </div>

                <!-- CTA Section -->
                <div class="col-md-3 section">
                    <h3>¿Quieres exponer en esta galería?</h3>
                    <p>
                        GALERÍA DE ARTE BOLIVIANO es un espacio que busca democratizar el acceso al arte,
                        ofreciendo a los artistas un lugar para desarrollarse y conectar con coleccionistas y
                        amantes del arte.
                    </p>
                    <a href="../contacto/index.html#contacto-ensenar-trabajo">
                    <button class="custom-button">Llena el formulario</button>
                </a>
                </div>
            </div>

            <!-- Footer Quote -->
            <div class="footer-quote">
                <p>"ABRE LA PUERTA AL ARTE VIRTUAL: UN MUNDO DE INSPIRACIÓN A TU ALCANCE."</p>
            </div>
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