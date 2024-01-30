import { Category } from '@/@types'
import Image from '@/components/globals/Image'
import Link from '@/components/globals/Link'
import { remoteLoadCategories } from '@/remotes'

type Props = {
  onlyLogo?: boolean
  showLogo?: boolean
}

export default async function Links({ onlyLogo, showLogo }: Props) {
  const categoriesResult = await remoteLoadCategories()

  if (categoriesResult.error) return null

  const categoriesDivided = categoriesResult.data.reduce(
    (categories, category, index, allCategories) => {
      if (index <= (allCategories.length - 1) / 2) {
        categories[0].push(category)
        return categories
      }
      categories[1].push(category)
      return categories
    },
    [[], []] as Category[][],
  )

  return (
    <nav className="flex flex-col items-center justify-center gap-8 md:flex-row">
      {!onlyLogo &&
        categoriesDivided[0].map((category) => (
          <Link
            key={category.key}
            href={`/categorias/${category.key}`}
            title={`Visualizar opções de ${category.name.toLowerCase()}`}
          >
            {category.name}
          </Link>
        ))}
      {showLogo && (
        <Link
          href="/"
          title="Navegar para a página principal"
          className="select-none"
        >
          <Image src="/logo.svg" alt="Logo" width={80} height={44} />
        </Link>
      )}
      {!onlyLogo &&
        categoriesDivided[1].map((category) => (
          <Link
            key={category.key}
            href={`/categorias/${category.key}`}
            title={`Visualizar opções de ${category.name.toLowerCase()}`}
          >
            {category.name}
          </Link>
        ))}
    </nav>
  )
}
