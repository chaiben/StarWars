import { Fragment } from "react"
import { Link } from "react-router-dom";
// import starshipGif1 from "../assets/starship1.gif"
// import starshipGif2 from "../assets/starship2.gif"
import starshipGif3 from "../assets/starship3.gif"

export default function Home(){
  return (
    <div className='container width80 home mt1 mb1'>
      <div className="center"><img className="imgHome" src={starshipGif3} alt="Starship 3" /></div>
      <div className="mt1">
        <h1>Welcome</h1>
        <p>A starship, often referred to as simply a ship, was a manned vehicle used for traveling in realspace or hyperspace. Dating back thousands of years, the earliest starships transported spacers to new worlds through cryogenic freezing processes. Upon the invention of the hyperdrive, those that were equipped could travel faster than light by entering hyperspace, drastically reducing the journey times between two solar systems.</p>
        <p>Due to the complex nature of ships, a variety of power sources were required to maintain and operate essential functions on board. The most common power sources were chemical, fission, or fusion reactors, which consumed a variety of fuels based on local resources, and dated back to the Republic's earliest days. Many large ships opted for fusion systems that contained hypermatter-annihilation cores, which could generate vast amounts of power. Despite all the benefits, most power systems required fuel hazardous to organic beings, often circulating in ship systems as corrosive liquids or combustible and poisonous gases. At least some starships possessed safety protocols built into the computer system that prevented the pilot from taking dangerous and reckless actions, though these could be disabled.</p>
        <p>Individual starships were registered with the Bureau of Ships and Services (BoSS), an organization founded millennia before the Clone Wars responsible for maintaining ship registrations, transponders and pilots' licenses.</p>
        <p>Types of starships included the shuttle, transport, freighter, yacht, starfighter, bomber, scout ship, gunship, assault ship, warship, and space station.</p>
        <div className="center mt1"><Link to="/starships" className="blackButton mt1">Explore</Link></div>
      </div>
    </div>
  );
}

