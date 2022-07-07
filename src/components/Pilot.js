import { Fragment, useState } from "react";
import useGetAPIData from "../hook/useGetAPIData";
import { ThumbnailBox } from "./Styled";
import PilotDetails from "./PilotDetails";

const Pilot = (props) => {
  const {loading, error, response:pilot, style} = useGetAPIData(props.url);
  const [show, setShow] = useState(false);
  const closeHandler = () => setShow(false);
  return (
    <Fragment>
        {pilot && <ThumbnailBox style={style} onClick={()=>setShow(true)} />}
        {loading && <div>Loading...</div>}
        {error && <div>Error...</div>}
        {show && <PilotDetails style={style} pilot={pilot} closeHandler={closeHandler} />}
    </Fragment>
  )
}

export default Pilot;