import './PortfolioCard.scss'
import {Image} from "minista";
import clsx from "clsx";

export default (props) => {
  const {
    mode,
    title,
    href,
    target = "_blank",
    imgSrc,
    isHiddenOnTablet = false,
  } = props

  return (
    <div className={clsx(
      'portfolio-card',
      mode && `portfolio-card--${mode}`,
      isHiddenOnTablet && 'hidden-tablet',
    )}>
      <a
        className="portfolio-card__link"
        href={href}
        title={title}
        target={target}
      >
        <div className="portfolio-card__poster">
          <Image
            className="portfolio-card__image"
            src={imgSrc}
          />
        </div>
        <h3 className={clsx(
          'portfolio-card__label',
          !mode && 'h4'
        )}>
          {title}
        </h3>
      </a>
    </div>
  )
}