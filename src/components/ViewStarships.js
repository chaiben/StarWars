import { useCallback, useRef, Fragment } from "react";
import useLocalStorage from "../hook/useLocalStorage";
import useStarshipFetch from "../hook/useStarshipFetch";
import Loading from "./Loading";

export default function ViewStarships(props){
  const [pageNumber, setPageNumber] = useLocalStorage("page", 1);
  
  const starships = useStarshipFetch(pageNumber)

  const observer = useRef();

  const lastStarshipElementRef = useCallback(node => {
    if (starships.loading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && starships.hasMore){
        setPageNumber(pageNumber + 1)
      }
    },{
      rootMargin: '-100px'
    })
    if (node) observer.current.observe(node);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [starships.loading, starships.hasMore, pageNumber]);
  
  return(
    <Fragment>
    { starships.list && starships.list.map(
    (starship, index) => {
      let classAux = (index === 1) ? "special" : "";
      if(index === starships.list.length - 1)
        return (
        <div 
          ref={lastStarshipElementRef}
          className={`startship-el ${classAux}`} 
          key={`name${index}`} 
          onClick={()=>props.showStarship(starship)} >
          <h3>{starship.name}</h3>
          <p>{starship.model}</p>
        </div>)
      else
        return (
          <div 
            className={`startship-el ${classAux}`} 
            key={`name${index}`} 
            onClick={()=>props.showStarship(starship)} >
            <h3>{starship.name}</h3>
            <p>{starship.model}</p>
          </div>)
    })}
  <div>{starships.loading && <Loading />}</div>
  <div>{starships.error && 'Error'}</div>
  </Fragment>
  )
}