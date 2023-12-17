import Image from '@/components/globals/Image'
import Link from '@/components/globals/Link'

type Props = {
  onlyLogo?: boolean
  showLogo?: boolean
}

export default function Links({ onlyLogo, showLogo }: Props) {
  return (
    <nav className="flex flex-col items-center justify-center gap-8 md:flex-row">
      {!onlyLogo && (
        <>
          <Link href="/aliancas" title="Visualizar opções de alinças">
            Alianças
          </Link>
          <Link href="/aneis" title="Visualizar opções de aneis">
            Aneis
          </Link>
        </>
      )}
      {showLogo && (
        <Link
          href="/"
          title="Navegar para a página principal"
          className="select-none"
        >
          <Image src="/logo.svg" alt="Logo" width={80} height={44} />
        </Link>
      )}
      {!onlyLogo && (
        <>
          <Link href="/colares" title="Visualizar opções de colares">
            Colares
          </Link>
          <Link href="/braceletes" title="Visualizar opções de braceletes">
            Braceletes
          </Link>
        </>
      )}
    </nav>
  )
}
