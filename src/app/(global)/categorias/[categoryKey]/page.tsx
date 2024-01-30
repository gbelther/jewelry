import { Suspense } from 'react'
import Spinner from '@/components/globals/Spinner'
import Header from '@/components/pages/Aliancas/Header'
import Products from '@/components/pages/Aliancas/Products'
import { ListOrdererVariant } from '@/@types'

type Props = {
  params: {
    categoryKey: string
  }
  searchParams: {
    sort: ListOrdererVariant
  }
}

export default function Page({ params, searchParams }: Props) {
  return (
    <main className="px-4 md:px-8 xl:px-12">
      <Header />
      <Suspense
        key={searchParams.sort}
        fallback={
          <div className="m-4 flex h-full w-full items-center justify-center">
            <Spinner />
          </div>
        }
      >
        <Products
          categoryKeyParam={params.categoryKey}
          sortParam={searchParams.sort}
        />
      </Suspense>
    </main>
  )
}
