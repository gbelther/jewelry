import Menu from '@/components/globals/Menu'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-rows-[auto_1fr]">
      <Menu />
      {children}
    </div>
  )
}
