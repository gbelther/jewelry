/* eslint-disable @typescript-eslint/no-explicit-any */
export const defineUrlWithQueryParams = (
  url: string,
  query: { [key: string]: any },
) => {
  let urlWithQuery = url
  Object.entries(query).forEach(([key, value], index) => {
    if (index === 0) {
      urlWithQuery += '?'
    }
    urlWithQuery += `${key}=${
      typeof value === 'string' ? value : JSON.stringify(value)
    }`
  })
  return urlWithQuery
}
