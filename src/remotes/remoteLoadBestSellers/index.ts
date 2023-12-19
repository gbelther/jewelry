import { Product } from '@/@types'
import { httpClient } from '@/libs/httpClient'

export type Result = {
  error: string
  data: Product[]
}

export const remoteLoadBestSellers = async (): Promise<Result> => {
  const response = await httpClient.request({
    baseUrl: 'apiUrl',
    url: '/best-sellers',
  })
  return { error: response.data.error, data: response.data }
}
