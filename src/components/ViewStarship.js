import { useRef } from "react";
import { VISUAL_GUIDE_URL } from "../variables";

export default function ViewStarship(props){
  const starship = props.starship ? props.starship : false;
  let aux = starship.url.split("/");
  const starshipCode = useRef(aux[aux.length - 2]);
  const imgURL = VISUAL_GUIDE_URL + "starships/" + starshipCode.current + ".jpg";
  const style = {
    backgroundImage: `url(${imgURL}), url(${VISUAL_GUIDE_URL}big-placeholder.jpg)`,
  }
  return(
    <div className="container show">
      <div className="starship-view">
        <div className="left">
          <div className="starship-img" style={style}></div>
        </div>
        <div className="right">
          <h1>{starship.name}</h1>
          <div><strong>Model: </strong> {starship.model}</div>
          <div><strong>Manufacturer: </strong> {starship.manufacturer}</div>
          <div><strong>Class: </strong> {starship.starship_class}</div>
          <div><strong>Cost: </strong> {starship.cost_in_credits}</div>
          <div><strong>Speed: </strong> {starship.max_atmosphering_speed}</div>
          <div><strong>Hyperdrive Rating: </strong> {starship.hyperdrive_rating}</div>
          <div><strong>MGLT: </strong> {starship.MGLT}</div>
          <div><strong>Length: </strong> {starship.length}</div>
          <div><strong>Cargo Capacity: </strong> {starship.cargo_capacity}</div>
          <div><strong>Mimimum Crew: </strong> {starship.crew}</div>
          <div><strong>Passengers: </strong> {starship.passengers}</div>
        </div>
      </div>
    </div>
  )
}