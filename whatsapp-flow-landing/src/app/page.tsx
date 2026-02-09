import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Benefits from '@/components/Benefits'
import Portfolio from '@/components/Portfolio'
import Testimonials from '@/components/Testimonials'
import Pricing from '@/components/Pricing'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-sand">
      <Hero />
      <Services />
      <Benefits />
      <Portfolio />
      <Testimonials />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  )
}
