import Hero from '@/sections/Hero'
import Stack from "@/sections/Stack"
import Portfolio from "@/sections/Portfolio";
import WorkExperience from "@/sections/WorkExperience";

export const metadata = {
  title: 'Frontend Developer',
}

export default () => {
  return (
    <>
      <Hero />
      <Stack />
      <Portfolio />
      <WorkExperience />
    </>
  )
}
