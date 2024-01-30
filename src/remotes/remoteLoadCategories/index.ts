import { Category } from '@/@types'
import { httpClient } from '@/libs/httpClient'

type Result = {
  error: string
  data: Category[]
}

export const remoteLoadCategories = async (): Promise<Result> => {
  const response = await httpClient.request({
    baseUrl: 'apiUrl',
    url: '/categories',
  })
  return { error: response.data.error, data: response.data }
}
