import BestSellers from '@/components/pages/Home/BestSellers'
import Footer from '@/components/pages/Home/Footer'
import Hero from '@/components/pages/Home/Hero'
import OurValues from '@/components/pages/Home/OurValues'

export default function Home() {
  return (
    <main>
      <Hero />
      <BestSellers />
      <OurValues />
      <Footer />
    </main>
  )
}
