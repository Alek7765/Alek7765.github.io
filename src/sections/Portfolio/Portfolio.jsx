import './Portfolio.scss'
import Section from "@/layouts/Section"
import { Image } from "minista"
import Slider from "@/components/Slider"
import PortfolioCard from "@/components/PortfolioCard"
import SliderNavigation from "@/components/Slider/components/SliderNavigation"

export default () => {
  const sectionId = 'portfolio'
  const sliderNavigationId = "portfolio-slider-navigation"

  const portfolioItems = [
    {
      title: 'Vertical videos',
      href: 'https://vertvidw.tutorplace.ru/',
      imgSrc: '/src/assets/images/portfolio/portfolio-site-1.jpg'
    },
    {
      title: 'Food diary',
      href: 'https://pitaniewsb2.tutorplace.ru/',
      imgSrc: '/src/assets/images/portfolio/portfolio-site-5.jpg'
    },
    {
      isApplication: true,
      title: 'React App - To Do List',
      href: 'https://alek7765.github.io/todo-react/',
      imgSrc: '/src/assets/images/portfolio/portfolio-app-1.jpg',
    },
    {
      title: 'Chinese goods',
      href: 'https://medchinaw1.tutorplace.ru/',
      imgSrc: '/src/assets/images/portfolio/portfolio-site-4.jpg'
    },
    {
      title: 'Waist',
      href: 'https://pitaniews9.tutorplace.ru/',
      imgSrc: '/src/assets/images/portfolio/portfolio-site-9.jpg'
    },
    {
      title: 'Food diary',
      href: 'https://pitanwsb6.tutorplace.ru/',
      imgSrc: '/src/assets/images/portfolio/portfolio-site-2.jpg'
    },
    {
      title: 'Food diary',
      href: 'https://pitanws10.tutorplace.ru/',
      imgSrc: '/src/assets/images/portfolio/portfolio-site-8.jpg'
    },
    {
        title: 'Matrix',
        href: 'https://matrixv10.tutorplace.ru/',
        imgSrc: '/src/assets/images/portfolio/portfolio-site-6.jpg'
    },
    {
      title: 'Pelvic floor',
      href: 'https://pelvicws.tutorplace.ru/',
      imgSrc: '/src/assets/images/portfolio/portfolio-site-3.jpg'
    },
    {
      title: 'Food diary',
      href: 'https://pitaniecalt5sm.tutorplace.ru/',
      imgSrc: '/src/assets/images/portfolio/portfolio-site-7.jpg'
    },
  ]

  const landingPages = portfolioItems.filter(item => !item.isApplication)
  const applications = portfolioItems.filter(item => item.isApplication)

  return (
    <Section
      title={<><span>My</span> Portfolio</>}
      id={sectionId}
      titleId={`${sectionId}-title`}
      actions={(
        <SliderNavigation id={sliderNavigationId} />
      )}
    >
      <div className="portfolio">
        <div className="portfolio__slider hidden-tablet">
          <Slider
            navigationTargetElementId={sliderNavigationId}
            isBeyondTheViewportOnMobile
          >
            {landingPages.map((item, index) => (
              <PortfolioCard
                {...item}
                key={index}
              />
            ))}
          </Slider>
        </div>
        <div className="portfolio__slider visible-tablet">
          <Slider
            navigationTargetElementId={sliderNavigationId}
            isBeyondTheViewportOnMobile
          >
            {portfolioItems.map((item, index) => (
              <PortfolioCard
                {...item}
                key={index}
              />
            ))}
          </Slider>
        </div>
        {applications.map((item, index) => (
          <PortfolioCard
            mode="large"
            {...item}
            key={index}
            isHiddenOnTablet
          />
        ))}
      </div>
    </Section>
  )
}