let iconeMenu = document.querySelector('.cabecalho__menu');

iconeMenu.addEventListener('click', () => {
    let menu = document.querySelector('.menu-lateral');
    menu.classList.toggle('menu-lateral--ativo');
})