import { HashRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import ScrollProgress from './components/ScrollProgress'
import { ToastProvider } from './components/ui'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import SkillsPage from './pages/SkillsPage'
import ProjectsPage from './pages/ProjectsPage'
import ResumePage from './pages/ResumePage'
import ContactPage from './pages/ContactPage'

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <ScrollProgress />
      <ToastProvider>
        <div className="flex min-h-screen flex-col bg-paper text-ink">
          {/* Keyboard users can jump straight past the navbar (button, not
              href="#…", so the URL hash — this is HashRouter — stays intact) */}
          <button
            type="button"
            onClick={() => {
              const main = document.getElementById('main')
              if (main) {
                main.focus({ preventScroll: true })
                main.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }
            }}
            className="sr-only cursor-pointer focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-teal-bright focus:px-5 focus:py-2.5 focus:text-xs focus:font-bold focus:uppercase focus:tracking-widest focus:text-paper"
          >
            Skip to content
          </button>
          <Navbar />
          <main id="main" tabIndex={-1} className="flex-1 outline-none">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/skills" element={<SkillsPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/resume" element={<ResumePage />} />
              <Route path="/contact" element={<ContactPage />} />
              {/* Unknown paths fall back to the full home experience */}
              <Route path="*" element={<HomePage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </ToastProvider>
    </HashRouter>
  )
}
