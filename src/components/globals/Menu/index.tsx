import Links from './components/Links'
import MenuDropdown from './components/MenuDropdown'

export default function Menu() {
  return (
    <menu className="h-20 p-4">
      <div className="hidden w-full md:block">
        <Links showLogo />
      </div>
      <div className="flex justify-between md:hidden">
        <Links onlyLogo showLogo />
        <MenuDropdown />
      </div>
    </menu>
  )
}
