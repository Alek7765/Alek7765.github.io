window.addEventListener('DOMContentLoaded', () => {

    // Nav menu for mobile
    
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu__item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    })

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        })
    })

    // Padeup

    const up = document.querySelector('.pageup');

    window.onscroll = () => {
        const scrollTop = document.documentElement.scrollTop;

        if (scrollTop > 1600) { // проскролили вниз 1600px
            up.style.display = 'block'; // показываем стрелку
        } else {
            up.style.display = 'none'; // наче стрелка скрыта
        }
    }

})
