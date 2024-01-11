import { ListOrdererVariant } from '@/@types'
import Listing from '@/components/globals/Listing'
import ProductPreview from '@/components/globals/ProductPreview'
import { remoteLoadProducts } from '@/remotes'
import { formatters } from '@/utils/formatters'

type Props = {
  sortParam: ListOrdererVariant
}

export default async function Products({ sortParam }: Props) {
  const productsResult = await remoteLoadProducts({ sort: sortParam })

  return (
    <Listing.List>
      {productsResult.data.map((item) => (
        <Listing.Item key={item.id}>
          <ProductPreview
            product={{
              id: item.id,
              name: item.name,
              price: formatters.formatMoney(item.price),
              priceOffer: formatters.formatMoney(item.priceOffer),
              rating: item.rating,
              imageUrl: item.imageUrl,
              categoryId: item.categoryId,
            }}
          />
        </Listing.Item>
      ))}
    </Listing.List>
  )
}
