import React from 'react'
import { remoteLoadBestSellers } from '@/remotes'
import Product from './components/Product'
import { formatters } from '@/utils/formatters'
import Button from '@/components/globals/Button'

async function List() {
  const result = await remoteLoadBestSellers()
  if (result.error) {
    return <h6>Falha ao carregar os produtos BestSellers</h6>
  }
  return result.data.map((bestSeller) => (
    <Product
      key={bestSeller.id}
      product={{
        ...bestSeller,
        price: formatters.formatMoney(bestSeller.price),
        priceOffer: formatters.formatMoney(bestSeller.priceOffer),
      }}
    />
  ))
}

export default async function BestSellers() {
  return (
    <div className="flex flex-col items-center gap-14 px-6 py-10">
      <h3 className="text-center underline decoration-black decoration-solid decoration-2 underline-offset-8">
        Best Sellers
      </h3>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-8 md:gap-16">
        <React.Suspense fallback={<h6>Carregando...</h6>}>
          <List />
        </React.Suspense>
      </div>
      <Button className="bg-white text-primary-700">Ver todas as jóas</Button>
    </div>
  )
}
