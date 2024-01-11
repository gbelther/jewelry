import Image from '@/components/globals/Image'
import Rating from '../Rating'
import { Product } from '@/@types'

type Props = {
  product: Omit<Product, 'price' | 'priceOffer'> & {
    price: string
    priceOffer: string
  }
}

export default function ProductPreview({ product }: Props) {
  return (
    <div className="cursor-pointer overflow-hidden rounded bg-white shadow transition-transform hover:scale-110">
      <div className="relative aspect-square w-full">
        <Image
          src={product.imageUrl}
          alt={`Imagem de ${product.name}`}
          loading="lazy"
          fill
        />
      </div>
      <div className="flex flex-col items-center gap-1 px-1 py-2 text-center">
        <h6 className="w-full truncate font-medium" title={product.name}>
          {product.name}
        </h6>
        <section className="flex items-center justify-center gap-4 text-gray-500">
          <span className="body-5">{product.price}</span>
          <span className="body-5 line-through">{product.priceOffer}</span>
        </section>
        <Rating rating={product.rating} />
      </div>
    </div>
  )
}
