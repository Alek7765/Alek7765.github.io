import './Section.scss'
import clsx from 'clsx'

export default (props) => {
  const {
    className,
    id,
    title,
    titleId,
    description,
    actions,
    children
  } = props

  return (
    <section
      className={clsx(className, 'section', 'container')}
      aria-labelledby={titleId}
      id={id}
    >
      <header className="section__header">
        <div className="section__info">
          <h2 className="section__title" id={titleId}>
            {title}
          </h2>
          {description && (
            <div className="section__description h5">
              <p>{description}</p>
            </div>
          )}
        </div>
        {actions && (
          <div className="section__actions visible-tablet hidden-mobile">
            {actions}
          </div>
        )}
      </header>
      <div className="section__body">{children}</div>
    </section>
  )
}
