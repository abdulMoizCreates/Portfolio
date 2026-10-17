import PageHead from '../components/PageHead'
import Skills from '../components/Skills'
import NextLink from '../components/NextLink'

export default function SkillsPage() {
  return (
    <>
      <PageHead
        title="Skills"
        blurb="My daily drivers across web development, creative tools and AI filmmaking."
      />
      <Skills />
      <NextLink to="/projects" label="Projects" />
    </>
  )
}
