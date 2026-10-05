import Header from './components/Header'
import Hero from './components/Hero'
import Statement from './components/Statement'
import Assets from './components/Assets'
import Markets from './components/Markets'
import { Chains, CTA, Developers, Footer, Infrastructure, Institutions, Issuance } from './components/Sections'
import useReveal from './useReveal'
import './App.css'

export default function App() {
  useReveal()

  return (
    <>
      <div className="grain" aria-hidden="true" />
      <Header />
      <main>
        <Hero />
        <Chains />
        <Statement />
        <Assets />
        <Markets />
        <Issuance />
        <Infrastructure />
        <Developers />
        <Institutions />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
