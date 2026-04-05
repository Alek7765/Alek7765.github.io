import './Hero.scss'
import Button from "@/components/Button"

export default () => {
  const sectionId = 'hero'

  return (
    <section
      className="hero container"
      id={sectionId}
      aria-labelledby={`${sectionId}-title`}
    >
      <div className="hero__inner">
        <header className="hero__header">
          <h1 className="hero__title" id={`${sectionId}-title`}>
            I’m a frontend
            developer.
          </h1>
          <h2 className="hero__name">
            Hi, my name is
            Aleksandr Sokolov.
          </h2>
        </header>
        <Button
          className="hero__button"
          mode="animated"
          label="Portfolio"
          href="#portfolio"
        />
      </div>
    </section>
  )
}
