import './SliderNavigation.scss'
import Button from "@/components/Button"
import clsx from "clsx"

const SliderNavigation = (props) => {
  const {
    className,
    id,
    hasPagination = true,
    isHiddenMobile,
    buttonMode = 'black-10',
  } = props

  return (
    <div
      className={clsx(
        className,
        'slider-navigation',
        isHiddenMobile && 'hidden-mobile',
      )}
      id={id}
      data-js-slider-navigation=""
    >
      <Button
        className="slider-navigation__arrow-button slider-navigation__arrow-button--previous"
        mode={buttonMode}
        iconName="arrow-left"
        label="Previous slide"
        isLabelHidden
        extraAttrs={{
          'data-js-slider-previous-button': '',
        }}
      />
      {hasPagination && (
        <div
          className="slider-navigation__pagination"
          data-js-slider-pagination=""
        />
      )}
      <Button
        className="slider-navigation__arrow-button slider-navigation__arrow-button--next"
        mode={buttonMode}
        iconName="arrow-right"
        label="Next slide"
        isLabelHidden
        extraAttrs={{
          'data-js-slider-next-button': '',
        }}
      />
    </div>

  )

}

export default SliderNavigation;