import PopupHeader from "./PopupHeader";
const PilotDetails = (props) => {
  const {style, pilot} = props
  return (
    <div className="popup show1s">
      <div className="popup-content">
        <PopupHeader 
        title={pilot.name}
        closeHandler={props.closeHandler} 
        />
        <div className="element-view mt0">
          <div className="left">
            <div className="element-img" style={style}></div>
          </div>
          <div className="right">
            <p>Name: <span>{pilot.name}</span></p>
            <p>Height: <span>{pilot.height} cm</span></p>
            <p>Mass: <span>{pilot.mass} kg</span></p>
            <p>Hair color: <span>{pilot.hair_color}</span></p>
            <p>Skin color: <span>{pilot.skin_color}</span></p>
            <p>Eye color: <span>{pilot.eye_color}</span></p>
            <p>Birth year: <span>{pilot.birth_year}</span></p>
            <p>Gender: <span>{pilot.gender}</span></p>
          </div>
        </div>
          <div 
          className="blackButton mt1 mb1"
          onClick={props.closeHandler}
          > Close </div>
      </div>
    </div>
  );
}

export default PilotDetails