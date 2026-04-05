import './WorkExperience.scss'
import Section from "@/layouts/Section"
import WorkExperienceCard from "@/components/WorkExperienceCard"
import logoTutorPlaceImgSrc from '@/assets/icons/tutorplace.svg'
import logoFreelanceImgSrc from '@/assets/icons/freelance.svg'

export default () => {
  const sectionId = 'work-experience'
  const experience = {
    tutorPlace: {
      title: 'TutorPlace',
      position: 'Web Developer',
      description: 'Development of the frontend part of landing pages and e-commerce projects.',
      features: [
        <><strong>Component approach:</strong> developed a library of reusable Vue components (buttons, accordions, dialogs, forms, timers) taking into account a11y and semantics</>,
        <><strong>Status Management:</strong> maintained and expanded the Vuex Store</>,
        <><strong>Migration of an assembly:</strong> updated the legacy infrastructure from Gulp to Vite, which reduced the weight of the final build by half and accelerated development due to HMR</>,
        <><strong>Creating a SPA:</strong> developed single-page websites with dynamic content</>,
        <><strong>Email layout:</strong> created adaptive emails compatible with Outlook, Gmail, Apple Mail and other clients</>,
        <><strong>Leadership:</strong> replaced Team Lead (team of 5 people) during his absence</>
      ],
      date: {
        isoDate: '2025-01',
        display: 'January 2025 - Present'
      }
    },
    freelance: {
      title: 'Freelance',
      position: 'Web Developer',
      description: 'Development of responsive websites and spa applications. Writing simple scripts.',
      features: [],
      date: {
        isoDate: '2024-04/2025-01',
        display: 'April 2024 - January 2025'
      }
    }
  }

  return (
    <Section
      title={<><span>Work</span> Experience</>}
      description="Continuous development and training..."
      id={sectionId}
      titleId={`${sectionId}-title`}
    >
      <div className="work-experience">
        <WorkExperienceCard
          logoImgSrc={logoTutorPlaceImgSrc}
          href="https://tutorplace.ru/"
          title={experience.tutorPlace.title}
          date={experience.tutorPlace.date}
          position={experience.tutorPlace.position}
          description={experience.tutorPlace.description}
          features={experience.tutorPlace.features}
        />
        <div className="work-experience__description">
          <span className="work-experience__value h1">75+</span>
          <span className="work-experience__label h3">
            projects implemented
          </span>
        </div>
        <div className="work-experience__description">
          <span className="work-experience__value h1">2+</span>
          <span className="work-experience__label h3">
            years of experience in web development
          </span>
        </div>
        <WorkExperienceCard
          logoImgSrc={logoFreelanceImgSrc}
          title={experience.freelance.title}
          date={experience.freelance.date}
          position={experience.freelance.position}
          description={experience.freelance.description}
        />
      </div>
    </Section>
  )
}