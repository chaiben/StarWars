import { Fragment } from "react"

const LoggedMenu = (props) => {
  return(
    <Fragment>
      <span>Hi {props.name}</span>
      {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
      <span className="breaker"> // </span>
      <span className="menu-button" onClick={() => props.setCurrentUser(false)}>Log out</span>
    </Fragment>
  )
}

export default LoggedMenu