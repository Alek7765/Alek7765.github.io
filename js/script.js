window.addEventListener('DOMContentLoaded', () => {

    // Menu panel

    const menu = document.querySelector('.menu'),
          menuLink = menu.querySelectorAll('a'),
          hamburger = document.querySelector('.hamburger'),
          close = menu.querySelector('.menu__close'),
          overlay = menu.querySelector('.menu__overlay'),
          sidepanel = document.querySelector('.sidepanel');
          
    hamburger.addEventListener('click', () => {
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

    // side panel
	let scrollPrev = 0;

    window.addEventListener('scroll', () => {
        const scrolled = document.documentElement.scrollTop;
    
        if ( scrolled > 2500 && scrolled > scrollPrev ) {
            sidepanel.classList.add('hidden');
        } else {
            sidepanel.classList.remove('hidden');
        }

        scrollPrev = scrolled;
    });

    
    // rating as a percentage for skills

    const counters = document.querySelectorAll('.skills__ratings-counter'),
          lines = document.querySelectorAll('.skills__ratings-line span'); // получ блок с линией внутри которой нах-ся span

    counters.forEach((item, i) => { // перебираем каждый эл-т массива с его номером по порядку
        lines[i].style.width = item.innerText; // номеру по порядку у линий устанавливаем стили равные числу эл-та из массива   
    });

})