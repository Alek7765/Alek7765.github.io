window.addEventListener('DOMContentLoaded', () => {

    // Animation
    new WOW().init(); // для работы бибиотеки animation.css

    // Modal

    const btn = document.querySelectorAll('.btn'),
        modal = document.querySelector('.overlay'),
        modalClose = document.querySelector('.modal__close');

    btn.forEach(item => {
        item.addEventListener('click', () => {
            modal.style.display = "block";
            document.body.style.overflow = "hidden";
        })
    })

    function closeModal(selector) {
        selector.addEventListener('click', () => {
        modal.style.display = "none";
        document.body.style.overflow = "";
        });
    }

    closeModal(modal);
    closeModal(modalClose);

});