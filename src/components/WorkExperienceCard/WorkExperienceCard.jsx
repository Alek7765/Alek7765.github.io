import './WorkExperienceCard.scss'
import Logo from "@/components/Logo"
import Accordion from "@/components/Accordion"

export default (props) => {
  const {
    logoImgSrc,
    href = null,
    title,
    date = {},
    position,
    description,
    features = [],
    stacks = []
  } = props

  return (
    <article className="work-experience-card">
      <header className="work-experience-card__header">
        <Logo
          title={title}
          href={href}
          logoImgSrc={logoImgSrc}
        />
        <div className="work-experience-card__info">
          <h3 className="work-experience-card__title">
            {href ? (
              <a
                className="work-experience-card__link"
                href={href}
                target="_blank"
                title={`Open ${title} in new tab`}
              >
                {title}
              </a>
            ) : title}
          </h3>
          <time
            className="work-experience-card__date"
            dateTime={date.isoDate}
          >
            {date.display}
          </time>
        </div>
      </header>
      <div className="work-experience-card__body">
        <h4 className="work-experience-card__position">
          {position}
        </h4>
        <h5 className="work-experience-card__description">
          {description}
        </h5>
        {features.length > 0 && (
          <Accordion
            title="More detailed"
            id="work-experience-description"
            name="description"
          >
            {features.map((feature, index) => (
              <p
                className="h5"
                key={index}
              >
                {feature}
              </p>
            ))}
          </Accordion>
        )}
      </div>
    </article>
  )
}