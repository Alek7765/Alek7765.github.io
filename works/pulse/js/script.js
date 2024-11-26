$(document).ready(function(){
    // Slick-slide

    $('.carousel__inner').slick({
        speed: 700,
        //adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left-arrow.svg" alt="left arrow"/></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right-arrow.svg" alt="right arrow"/></button>',
        responsive: [
            {
                breakpoint: 768, // разрешение экрана от 0 до 768
                settings: {
                    dots: true, // появляются точки
                    arrows: false // исчезают стрелки
                }
            }
        ]
    });

    //Tabs

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    function toggleSlide(selector) {
        $(selector).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            })
        });
    };

    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');

    // Modal

    $('[data-modal=consultation]').on('click', function() { // получаем эл-т по атрибуту и навешиваем обр события клика
        $('.overlay, #consultation').fadeIn('slow');              // получаем эл-ты, через запятую и проявляем их на старннице fadeIn(медленно)
        $(document.body).css('overflow', 'hidden');
    });

    $('.modal__close').on('click', function() { // получаем эл-т по классу и навешиваем обр события клика
        $('.overlay, #consultation, #thanks, #order').fadeOut(); // получаем эл-ты по классу через запятую и скрываем эти эл-ты со стр
        $(document.body).css('overflow', '');
    });

    $('.button_mini').each(function(i) { // получаем кнопки по классу и перебираем их через each
        $(this).on('click', function() { // кликаем на эти самые кнопки через this
            $('#order .modal__desc').text($('.catalog-item__subtitle').eq(i).text()); //(в опр #модалке с опр классом).назначаем текст(с опр класс).(индекс по порядку)(получ текст из этого класса)
            $('.overlay, #order').fadeIn('slow'); // получаем эл-ты, через запятую и проявляем их на старннице медленно
            $(document.body).css('overflow', 'hidden');
        })
    })

    // Validate form

    function validateForms(form) {
        $(form).validate({                // эл-т модалки по id и т.п., где вложена форма из аргумента
            rules: {                     // правила валидации
                name: {
                    required: true,     // обязательно к заполнению
                    minlength: 2       // мин кол-во символов к заполнению
                },         
                phone: "required",     // обязательно к заполнению
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {              // уведомления для пользоваителя при заполнении форм
                name: {
                    required: "Пожалуйста, введите свое имя",
                    minlength: jQuery.validator.format("Не менее {0}ух символов!")
                },
                phone: "Пожалуйста, введите свой номер телефона",
                email: {
                    required: "Пожалуйста, введите свой email",
                    email: "Некорректный email адрес"
                }
            }
        });
    }

    validateForms('#consultation-form');
    validateForms('#consultation form');
    validateForms('#order form');

    // MaskedInput for tel

    $('input[name=phone').mask("+7 (999) 999-99-99");

    // sending emails

    $('form').submit(function(e) { // получаем все теги формы и сабмитим их
        e.preventDefault();        // отменили стандарт поведение браузера (чтоб не перезапускался)

        if(!$(this).valid()) {    // если форма не пройдет валидацию, то ничего не произойдет
            return;
        }

        $.ajax({
            type: "POST",                  // отправляем данные на сервер
            url: "mailer/smart.php",       // путь куда сперва придут данные
            data: $(this).serialize()      // полученные данные с форм переводим в нужный формат
        }).done(function() {               // когда все выполнится, запускаем ф-цию
            $(this).find("input").val(""); // введенные данные с инпутов (value) очищаем
            $('#consultation, #order').fadeOut(); // после отправки формы данные модалки закроются
            $('.overlay, #thanks').fadeIn('slow'); // появится модалка с благодарностью

            $('form').trigger('reset');    // очищаем форму
        });
        return false;
    });

    // Smooth scroll and pageup

    $(window).scroll(function() {          // обращаемся ко всему док-ту, следим за скролом и запускаем ф-цию
        if ($(this).scrollTop() > 1600) {  // если (док-т).проскролили больше 1600px
            $('.pageup').fadeIn();         // обращаемся к классу с иконкой и показываем ее на стр
        } else {
            $('.pageup').fadeOut();         // иначе иконка скрыта
        }
    });

    $("a[href='#up']").click(function() {
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });


    // Animation CSS and WOW.js

    new WOW().init(); // для работы бибиотеки animation.css
});

// ниже код для tiny-слайдера

// const slider = tns({
//     container: '.carousel__inner',
//     items: 1,
//     slideBy: 'page',
//     autoplay: false,
//     nav: false, // точки
//     controls: false, // стрелки
//     responsive: { // адаптация
//         640: {
//             edgePadding: 20,
//             gutter: 20,
//             items: 2
//         }
//     }
// });

// document.querySelector('.slick-next').addEventListener('click', function () { // пролистывание слайда вперед
//     slider.goTo('next');
// });

// document.querySelector('.slick-prev').addEventListener('click', function () { // пролистывание слайда назад
//     slider.goTo('prev');
// });