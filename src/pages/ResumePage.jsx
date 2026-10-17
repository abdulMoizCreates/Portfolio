import PageHead from '../components/PageHead'
import Resume from '../components/Resume'
import NextLink from '../components/NextLink'

export default function ResumePage() {
  return (
    <>
      <PageHead
        title="Resume"
        blurb="Everything on one page — summary, skills, education and selected work. Print it or save it as a PDF."
      />
      <Resume />
      <NextLink to="/contact" label="Contact" />
    </>
  )
}
