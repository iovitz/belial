import { useEffect, useState } from 'react'
import { useLogger } from './logger'

interface PagingRequestData<T> {
  data: T[]
  total: number
  hasMore: boolean
}

export function useVantListStatus<T = any>(options: {
  immediate?: boolean
  fetchFn: (page: number) => Promise<PagingRequestData<T>>
  pageSize?: number
  deps?: React.DependencyList
}) {
  const [value, setValue] = useState<Array<T>>([])
  const [page, setPage] = useState(1)
  const [error, setError] = useState<null | Error>(null)
  const [loading, setLoading] = useState(false)
  const [total, setTotal] = useState(0)
  const [finished, setFinished] = useState(false)
  const logger = useLogger('useVantListStatus')
  useEffect(() => {
    if (options.immediate) {
      fetchListData()
    }
    return () => {
      logger.error('退出编辑')
    }
  }, [])

  function fetchListData() {
    if (loading) {
      logger.debug('loading return')
      return Promise.resolve()
    }
    setLoading(true)
    return options.fetchFn(page)
      .then((data) => {
        setValue([...value, ...data.data])
        if (data.hasMore) {
          setPage(page + 1)
        }
        else {
          setFinished(true)
        }
      })
      .catch((error) => {
        setFinished(true)
        setError(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }
  return {
    value,
    setValue,
    page,
    setPage,
    total,
    setTotal,
    error,
    setError,
    finished,
    setFinished,
    fetchListData,
  }
}
