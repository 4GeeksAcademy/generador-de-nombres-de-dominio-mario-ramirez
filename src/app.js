import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here
  let articulo = ['el', 'nuestro', 'su']
  let adjetivo = ['gran', 'asombroso', 'pequeño', 'espectacular']
  let sustantivo = ['chef', 'restaurante', 'lobo', 'coliseo']
  let extensiones = ['.com', '.net', '.co', '.us']

  const dominios = []

  articulo.forEach(art => {
    adjetivo.forEach(adj => {
      sustantivo.forEach(sust => {
        extensiones.forEach(ext => {
          dominios.push(`Tu dominio es: ${art}${adj}${sust}${ext}`)
        })
      })
    })
  })
  let domtrans = dominios.map(n => {
    return `
      <li class="list-group-item">${n}</li>
    `
  })

  document.getElementById("generate").innerHTML = domtrans.join('')

}