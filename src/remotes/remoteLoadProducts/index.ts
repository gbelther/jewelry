import { ListOrdererVariant, Product } from '@/@types'
import { httpClient } from '@/libs/httpClient'

type Params = {
  sort?: ListOrdererVariant
}

type Result = {
  error: string
  data: Product[]
}

export const remoteLoadProducts = async ({ sort }: Params): Promise<Result> => {
  const response = await httpClient.request({
    baseUrl: 'apiUrl',
    url: '/products',
    cache: 'no-cache',
    query: { sort },
  })
  return { error: response.data.error, data: response.data }
}
