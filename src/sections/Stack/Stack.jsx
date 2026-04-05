import './Stack.scss'
import Section from "@/layouts/Section"

export default () => {
  const sectionId = 'stack'

  const stackItems = [
    'HTML', 'PUG', 'JSX', 'CSS', 'SASS', 'SCSS', 'BEM', 'PostCSS',
    'Accessibility', 'Bootstrap', 'JavaScript', 'OOP', 'jQuery', 'Vue',
    'Vuex', 'React', 'Minista', 'Figma', 'FSD', 'Webpack', 'Vite', 'Gulp',
    'Git', 'GitHub', 'GitLab', 'Redux'
  ]

  return (
    <Section
      title={<>Technology <span>stack</span></>}
      titleId={`${sectionId}-title`}
      description="The tools I use to create modern products."
      id={sectionId}
    >
      <div className="stack">
        <div className="stack__wrapper-list">
          <ul className="stack__list">
            {stackItems.map((item, index) => (
              <li className="stack__item h5" key={index}>
                <p>{item}</p>
              </li>
            ))}
          </ul>
          <ul className="stack__list">
            {stackItems.map((item, index) => (
              <li className="stack__item h5" key={index}>
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="stack__wrapper-list stack__wrapper-list--row-reverse">
          <ul className="stack__list">
            {stackItems.map((item, index) => (
              <li className="stack__item h5" key={index}>
                <p>{item}</p>
              </li>
            ))}
          </ul>
          <ul className="stack__list">
            {stackItems.map((item, index) => (
              <li className="stack__item h5" key={index}>
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}