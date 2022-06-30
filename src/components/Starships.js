import { Fragment, useCallback, useState, useRef } from "react";
import useStarshipFetch from "../hook/useStarshipFetch";
import Loading from "./Loading";

export default function Starships(){
  const [pageNumber, setPageNumber] = useState(1);
  const {
    loading, 
    error, 
    starships, 
    hasMore
  } = useStarshipFetch(pageNumber)
  
  const observer = useRef();

  const lastStarshipElementRef = useCallback(node => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore){
        setPageNumber(pageNumber + 1)
      }
    },{
      rootMargin: '-100px'
    })
    if (node) observer.current.observe(node);
  }, [loading, hasMore, pageNumber]);

  // useEffect(() => {
  //   axios.get(starshipsListURL)
  //     .then(res=>{setStarshipsList(prevList => {
  //       setNextStarshipsListURL(res.data.next);
  //       return [...prevList, ...res.data.results]
  //     })})
  // }, [starshipsListURL]);

  function showStarship(index){
    console.log(starships[index]);
  }

  return (
    <Fragment>
      {starships && starships.map(
        (starship, index) => {
          let classAux = (index === 1) ? "special" : "";
          if(index === starships.length - 1)
            return (
            <div 
              ref={lastStarshipElementRef}
              className={`startship-el ${classAux}`} 
              key={`name${index}`} 
              onClick={()=>showStarship(index)} >
              <h3>{starship.name}</h3>
              <p>{starship.model}</p>
            </div>)
          else
            return (
              <div 
                className={`startship-el ${classAux}`} 
                key={`name${index}`} 
                onClick={()=>showStarship(index)} >
                <h3>{starship.name}</h3>
                <p>{starship.model}</p>
              </div>)
      }
      )}
      <div>{loading && <Loading />}</div>
      <div>{error && 'Error'}</div>
    </Fragment>
  );
}