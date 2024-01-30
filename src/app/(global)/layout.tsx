import Menu from '@/components/globals/Menu'
import Footer from '@/components/globals/Footer'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid min-h-screen grid-rows-[auto_1fr_auto]">
      <Menu />
      {children}
      <Footer />
    </div>
  )
}
