import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './style.css'

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('button')
  if (btn) {
    btn.addEventListener('click', () => {
      alert('¡Has presionado el botón!')
    })
  }
})
