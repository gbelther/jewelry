import { ListOrdererVariant, Product } from '@/@types'
import { httpClient } from '@/libs/httpClient'

type Params = {
  categoryKey?: string
  sort?: ListOrdererVariant
}

type Result = {
  error: string
  data: Product[]
}

export const remoteLoadProducts = async ({
  categoryKey,
  sort,
}: Params): Promise<Result> => {
  const response = await httpClient.request({
    baseUrl: 'apiUrl',
    url: '/products',
    cache: 'no-cache',
    query: { categoryKey, sort },
  })
  return { error: response.data.error, data: response.data }
}
