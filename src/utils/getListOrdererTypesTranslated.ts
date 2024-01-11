import { ListOrdererVariant } from '@/@types'

export const getListOrdererTypesTranslated = (type: ListOrdererVariant) => {
  switch (type) {
    case 'relevance':
      return 'Relevância'
    case 'alphabetical-asc':
      return 'Alfabética (A-Z)'
    case 'alphabetical-desc':
      return 'Alfabética (Z-A)'
    case 'price-asc':
      return 'Menor preço'
    case 'price-desc':
      return 'Maior preço'
    default:
      return ''
  }
}
