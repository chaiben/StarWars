import { Fragment } from "react";
import logo from "../assets/sw_logo2.png"

export default function PopupHeader(props){
  return(
    <Fragment>
      <div className="close-box">
        <span className="close-button" onClick={props.closeHandler}></span>
        </div>
      <div className="logo"><img src={logo} alt="logo" /></div>
      <h2 className="title-popup">{props.title}</h2>
    </Fragment>
  )
}