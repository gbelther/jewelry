import { Suspense } from 'react'
import Spinner from '@/components/globals/Spinner'
import Header from '@/components/pages/Aliancas/Header'
import Products from '@/components/pages/Aliancas/Products'
import { ListOrdererVariant } from '@/@types'

type PageProps = {
  searchParams: {
    sort: ListOrdererVariant
  }
}

export default function AliancasPage({ searchParams }: PageProps) {
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
        <Products sortParam={searchParams.sort} />
      </Suspense>
    </main>
  )
}
