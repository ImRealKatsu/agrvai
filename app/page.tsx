import Hero from '@/components/ui/Hero'
import Features from '@/components/ui/Features'
import Testimonials from '@/components/ui/Testimonials'
import CTA from '@/components/ui/CTA'
import LegalInfo from '@/components/ui/LegalInfo'

export default function Home() {
  return (
    <main className="bg-gray-900 text-white">
      <Hero />
      <Features />
      <Testimonials />
      <CTA />
      <LegalInfo />
    </main>
  )
}

