import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import ViewStarships from "./ViewStarships";

export default function Starships(){
  const navigate = useNavigate()
  function showStarship(starship){
    let aux = starship.url.split("/");
    navigate(`./${aux[aux.length - 2]}`)
  }

  return (
    <Fragment>
      <ViewStarships showStarship={showStarship} />
    </Fragment>
  );
}