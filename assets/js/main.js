// Cargar el navbar
console.log('jholhhh')

fetch('../../components/navbar.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('navbar-container').innerHTML = data;
    })
    .catch(error => console.error('Error al cargar el navbar:', error));

// Cargar el footer
fetch('../../components/footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer-container').innerHTML = data;
    })
    .catch(error => console.error('Error al cargar el footer:', error));


function toggleContent(id, btn) {
        var content = document.getElementById(id);
        var isOpen = content.classList.contains('show');
        
        if (isOpen) {
            content.classList.remove('show');
            btn.textContent = "+";  // Cambiar el signo a +
        } else {
            content.classList.add('show');
            btn.textContent = "-";  // Cambiar el signo a -
        }
    }
    
    
