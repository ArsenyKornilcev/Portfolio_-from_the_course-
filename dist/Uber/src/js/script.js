window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.ul_menu'),
    menuItem = document.querySelectorAll('.menu_item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        menu.classList.toggle('active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            menu.classList.toggle('active');
        })
    })
})