const menu = document.getElementById('menu-open'),
    nav_mobile = document.getElementById('nav-mobile'),
    menu_close = document.getElementById('menu-close');

menu.addEventListener('click', () => {
    nav_mobile.style.display = 'flex';
});

menu_close.addEventListener('click', () => {
    nav_mobile.style.display = 'none';
});