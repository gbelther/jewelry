/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { useCallback, useMemo } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import ListOrdererSelect from '@/components/globals/ListOrdererSelect'
import { ListOrdererVariant } from '@/@types'

export default function Header() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams)
      params.set(name, value)
      return params.toString()
    },
    [searchParams],
  )

  const handleListOrderChange = (item: ListOrdererVariant) => {
    const queryString = createQueryString('sort', item)
    router.push(`${pathname}?${queryString}`)
  }

  const sortParam = useMemo(() => {
    const initialSortParam = searchParams.get('sort')
    if (!initialSortParam) return 'relevance'
    return initialSortParam as ListOrdererVariant
  }, [searchParams])

  return (
    <header className="flex w-full justify-end py-2">
      <section className="flex items-center gap-1">
        <p className="text-xs">Ordenar por:</p>
        <ListOrdererSelect item={sortParam} onSelect={handleListOrderChange} />
      </section>
    </header>
  )
}
