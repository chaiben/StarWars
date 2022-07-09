import { useEffect, useState } from 'react'
import axios from "axios"
import useLocalStorage from './useLocalStorage'
import { API_URL } from '../variables'

export default function useStarshipFetch(pageNumber){
  const [loading, setLoading] = useLocalStorage("useStarshipFetch-loading", true)
  const [error, setError] = useLocalStorage("useStarshipFetch-error",false)
  const [list, setList] = useState(() => {
    try {
      const item = window.localStorage.getItem("useStarshipFetch-list");
      return item ? JSON.parse(item) : [];
    } catch (e) {
      return [];
    }
  })
  const [hasMore, setHasMore] = useLocalStorage("useStarshipFetch-hasMore",true)

  useEffect(() => 
    window.localStorage.setItem("useStarshipFetch-list", JSON.stringify(list)),
    [list]
  )

  useEffect(() => {
    if(!hasMore) return;
    setLoading(true)
    setError(false)
    let cancel
    axios({
      method: 'GET',
      url: API_URL,
      params: { page: pageNumber },
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(res => {
      setList(prevStarships => {
        return [...prevStarships, ...res.data.results]
      })
      setHasMore(res.data.next ? true : false)
      setLoading(false)
    }).catch(e => {
      if (axios.isCancel(e)) return
      setError(true)
    })
    return () => cancel()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNumber])

  return { loading, error, list, hasMore }  
}