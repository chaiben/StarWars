import { Fragment } from "react";
import ViewStarships from "./ViewStarships";

export default function Starships(){
  function showStarship(starship){
    console.log(starship);
  }

  return (
    <Fragment>
      <ViewStarships showStarship={showStarship} />
    </Fragment>
  );
}