import PageHead from '../components/PageHead'
import Contact from '../components/Contact'
import NextLink from '../components/NextLink'

export default function ContactPage() {
  return (
    <>
      <PageHead
        title="Contact"
        blurb="Open to internships, junior roles and collaborations — say hello anytime."
      />
      <Contact />
      <NextLink to="/" label="Home" />
    </>
  )
}
