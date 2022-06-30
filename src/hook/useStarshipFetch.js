import { useEffect, useState } from 'react'
import axios from "axios"

export default function useStarshipFetch(pageNumber){
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [starships, setStarships] = useState([])
  const [hasMore, setHasMore] = useState(false)

  useEffect(() => {
    setLoading(true)
    setError(false)
    let cancel
    axios({
      method: 'GET',
      url: 'https://swapi.dev/api/starships/',
      params: { page: pageNumber },
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(res => {
      setStarships(prevStarships => {
        return [...prevStarships, ...res.data.results]
      })
      setHasMore(res.data.next ? true : false)
      setLoading(false)
    }).catch(e => {
      if (axios.isCancel(e)) return
      setError(true)
    })
    return () => cancel()
  }, [pageNumber])

  return { loading, error, starships, hasMore }  
}