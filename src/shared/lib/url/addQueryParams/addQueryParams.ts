
export const getQueryParams = (params: Record<string, string | undefined>) => {
  const searchParams = new URLSearchParams(window.location.search)

  Object.entries(params).forEach(([name, value]) => {
    if (value) {
      searchParams.set(name, value)
    } else {
      searchParams.delete(name)
    }
  })

  return `?${searchParams.toString()}`
}

/**
 * Функция добавления параметров строки запроса в URL
 * @param params
 */

export const addQueryParams = (params: Record<string, string>) => {
  window.history.pushState(null, '', getQueryParams(params))
}
