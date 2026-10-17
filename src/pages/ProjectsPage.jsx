import PageHead from '../components/PageHead'
import Projects from '../components/Projects'
import NextLink from '../components/NextLink'

export default function ProjectsPage() {
  return (
    <>
      <PageHead
        title="Projects"
        blurb="Things I have shipped so far — small, honest builds with big lessons."
      />
      <Projects />
      <NextLink to="/resume" label="Resume" />
    </>
  )
}
