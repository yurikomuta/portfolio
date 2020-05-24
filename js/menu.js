const hamburguer = document.querySelector('.hamburguer');
const menu = document.querySelector('.menu-navegacao');

console.log(menu)
console.log(hamburguer)

/* abertura do menu */
hamburguer.addEventListener('click', () => {
    menu.classList.toggle("spread")
})


window.addEventListener('click', e => {
    if (menu.classList.contains('spread') && e.target != menu && e.target != hamburguer) {
        menu.classList.toggle("spread")

    }
})