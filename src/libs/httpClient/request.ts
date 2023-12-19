/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseUrls } from './baseUrls'
import { defineUrlWithQueryParams } from './defineUrlWithQueryParams'

type Params = {
  url: string
  baseUrl?: keyof typeof baseUrls
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE'
  query?: { [key: string]: any }
  headers?: { [key: string]: any }
  cache?: RequestCache
  next?: NextFetchRequestConfig
  body?: { [key: string]: any }
  signal?: AbortSignal | null | undefined
}

export const request = async ({
  url,
  baseUrl = 'apiUrl',
  method,
  query = {},
  body,
  cache,
  headers = {},
  next,
  signal,
}: Params) => {
  setTimeout(() => {
    console.log('request')
  }, 1000)
  const urlWithQuery = defineUrlWithQueryParams(url, query)
  const urlParsed = new URL(urlWithQuery, baseUrls[baseUrl])
  const response = await fetch(urlParsed.toString(), {
    method,
    cache,
    body: body ? JSON.stringify(body) : undefined,
    headers,
    next,
    signal,
  })
  const responseJson = await response.json()
  return {
    succeeds: response.ok,
    statusCode: response.status,
    type: response.type,
    headers: response.headers,
    data: responseJson,
  }
}
