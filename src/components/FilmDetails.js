import PopupHeader from "./PopupHeader";
const FilmDetails = (props) => {
  const {style, film} = props
  const release_date = new Date(film.release_date).toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"}) ;
  return (
    <div className="popup show1s">
      <div className="popup-content">
        <PopupHeader 
        title={film.name}
        closeHandler={props.closeHandler} 
        />
        <div className="element-view mt0">
          <div className="left">
            <div className="element-img" style={style}></div>
          </div>
          <div className="right">
            <p>Title: <span>{film.title}</span></p>
            <p>Episode number: <span>{film.episode_id}</span></p>
            <p>Opening crawl: <span>{film.opening_crawl}</span></p>
            <p>Director: <span>{film.director}</span></p>
            <p>Producer: <span>{film.producer}</span></p>
            <p>Release date: <span>{release_date}</span></p>
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

export default FilmDetails