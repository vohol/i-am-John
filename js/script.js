document.addEventListener('DOMContentLoaded', function () {
    const HEADER_MENU = document.querySelector('.header__navigation');
    const BUTTON_MENU = HEADER_MENU.querySelector('.header__menu-buttons');
    console.log(HEADER_MENU);
    BUTTON_MENU.addEventListener('click', function () {
        HEADER_MENU.classList.toggle('header__navigation--active');
    })
})
    