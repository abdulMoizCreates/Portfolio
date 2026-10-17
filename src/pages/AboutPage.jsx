import PageHead from '../components/PageHead'
import About from '../components/About'
import NextLink from '../components/NextLink'

export default function AboutPage() {
  return (
    <>
      <PageHead
        title="About"
        blurb="Who I am, what I am learning, and where I am heading."
      />
      <About />
      <NextLink to="/skills" label="Skills" />
    </>
  )
}
