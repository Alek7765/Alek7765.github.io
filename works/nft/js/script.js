window.addEventListener('DOMContentLoaded', () => {

    // Menu panel

    const menu = document.querySelector('.menu'),
          menuLink = menu.querySelectorAll('a'),
          sandwich = document.querySelector('.sandwich'),
          close = menu.querySelector('.menu__close'),
          overlay = menu.querySelector('.menu__overlay');
          
    sandwich.addEventListener('click', () => {
        menu.classList.add('active');
        document.body.style.overflow = "hidden";
    });

   
    menuLink.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('active');
            document.body.style.overflow = "";  
        });
    });

    function closeMenu(selector) {
        selector.addEventListener('click', () => {
            menu.classList.remove('active');
            document.body.style.overflow = "";
        });
    }

    closeMenu(close);
    closeMenu(overlay);

    // Modal

    const modal = document.querySelector('.overlay'),
         closeModal = document.querySelector('.modal__close'),
         btn = document.querySelector('.promo__btn'),
         submit = document.querySelector('.modal__btn'),
         scroll = calcScroll();

    btn.addEventListener('click', () => {
        modal.style.display = 'block';
        document.body.style.overflow = "hidden";
        document.body.style.marginRight = `${scroll}px`;
    })

    submit.addEventListener('click', (e) => {

        e.preventDefault();

        modal.style.display = 'none';
        document.body.style.overflow = "";

        btn.style.cssText = `
            color: rgba(36, 36, 36, 0.5);
            box-shadow: none;
        `
    })

    function closing(selector) {
            selector.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow = "";
            document.body.style.marginRight = `0px`;
        })
    }

    function calcScroll() {// ф-ция для подсчета ск px от скролла
        let div = document.createElement('div');

        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();

        return scrollWidth;
    }

    closing(closeModal);
});