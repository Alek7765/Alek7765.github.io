import 'swiper/css' // строго до наших стилей
import './Slider.scss'
import slider from "@/components/Slider/index"
import clsx from 'clsx'

const defaultSliderParams = {
  loop: true,
  slidesPerView: 1,   // из доки свайпера видимость слайдеров 5 карточек
  slidesPerGroup: 1, // кол-во сгруппированных слайдов, кот будут прокручиваться группами
  spaceBetween: 20, // 30px из макета, расстояние между слайдами
  breakpoints: {   // обязательно по принципу мобайлферст от мин к макс
    0: {
      slidesPerView: 1.4,
      slidesPerGroup: 1,
      spaceBetween: 15,
    },
    481: {
      slidesPerView: 2.4,
      slidesPerGroup: 1,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 3,
      slidesPerGroup: 1,
      spaceBetween: 5,
    },
  }
}

export default (props) => {
  const {
    children,
    navigationTargetElementId = null,
    sliderParams = defaultSliderParams,
    isBeyondTheViewportOnMobile,
    hasScrollbar = true,
  } = props;

  return (
    <div
      className={clsx(
        'slider',
        isBeyondTheViewportOnMobile && 'slider--beyond-the-viewport-on-mobile'
      )}
      data-js-slider={JSON.stringify({ // превращ люб передан арг данные в строку
        sliderParams,
        navigationTargetElementId,
      })}
    >
      <div
        className="slider__swiper swiper"
        data-js-slider-swiper=""
      >
        <ul className="slider__list swiper-wrapper">
          {children.map((slide, index) => (
            <li
              className="slider__item swiper-slide"
              key={index}
            >
              {slide}
            </li>
          ))}
        </ul>
      </div>

      {hasScrollbar && (
        <div
          className="slider__scrollbar visible-mobile"
          data-js-slider-scrollbar=""
        />
      )}
    </div>
  )
}