/* Cuando hago CLICK .button, .nav TOGGLE 'ACTIVO' */

const button = document.querySelector('.button')
const nav = document.querySelector('.nav-j25')

button.addEventListener('click',()=>{
    nav.classList.toggle('activo')
})