import axios from "axios"
import { Fragment, useEffect, useState } from "react";

export default function Starships(){
  const [starshipList, setStarshipsList] = useState([]);
  const [starshipsListURL, setStarshipsListURL] = useState("https://swapi.dev/api/starships/?page=1");
  const [nextStarshipsListURL, setNextStarshipsListURL] = useState("");

  useEffect(() => {
    axios.get(starshipsListURL)
      .then(res=>{setStarshipsList(prevList => {
        setNextStarshipsListURL(res.data.next);
        return [...prevList, ...res.data.results]
      })})
  }, [starshipsListURL]);

  function showStarship(index){
    console.log(starshipList[index]);
  }

  function nextPage(){
    if(nextStarshipsListURL)
      setStarshipsListURL(nextStarshipsListURL);
  }

  return (
    <Fragment>
      <h1>Starships</h1>
      {starshipList && starshipList.map((starship, index) => 
      <div key={`name${index}`} onClick={()=>showStarship(index)} >
        {starship.name} - {starship.model}
      </div>)}
      {nextStarshipsListURL && <button onClick={nextPage}>Load More</button>}
    </Fragment>
  );
}