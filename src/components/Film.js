import { Fragment, useState } from "react";
import useGetAPIData from "../hook/useGetAPIData";
import { ThumbnailBox } from "./Styled";
import FilmDetails from "./FilmDetails";

const Film = (props) => {
  const {loading, error, response:film, style} = useGetAPIData(props.url)
  const [show, setShow] = useState(false);
  const closeHandler = () => setShow(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  return (
    <Fragment>
      {film && <ThumbnailBox style={style} onClick={()=>setShow(true)} />}
      {loading && <div>Loading...</div>}
      {error && <div>Error...</div>}
      {show && <FilmDetails style={style} film={film} closeHandler={closeHandler} />}
    </Fragment>
  )
}

export default Film;