import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './style.css'


document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const respuesta = document.getElementById('respuestaContacto');
  
    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        const nombre = document.getElementById('nombreVisitante').value;
        const contacto = document.getElementById('contactoVisitante').value;
  
        if (nombre && contacto) {
          respuesta.classList.remove('d-none');
        }
      });
    }
  });
  