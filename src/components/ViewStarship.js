import useVisualGuide from "../hook/useVisualGuide";
import Film from "./Film";
import Pilot from "./Pilot";
import { useNavigate } from 'react-router-dom';

export default function ViewStarship(props){
  const starship = props.starship ? props.starship : false;
  const {style} = useVisualGuide(starship.url);
  const navigate = useNavigate();
  return(
    <div className="container show">
      <div className="starship-view mt1">
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
      <div className="starship-view">
        <div className="left">
          {starship.pilots.length > 0 && <h3>Pilots</h3>}
          <div className="flex gap2">
            {starship.pilots.map(url => <Pilot key={url} url={url} />)}
          </div>
        </div>
        <div className="right">
        <h3>Films</h3>
          <div className="flex gap2">
            {starship.films.map(url => <Film key={url} url={url} />)}
          </div>
        </div>
      </div>
      <div className="center mt1 mb1">
        <button className="blackButton mt1" onClick={()=>navigate(-1)}><span> Back </span></button>
      </div>
    </div>
  )
}