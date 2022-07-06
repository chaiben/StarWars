import { Fragment } from "react"

const LoginSignUp = (props) => {
  return(
    <Fragment>
      <span className="menu-button" onClick={()=>props.setShowLogIn(true)}>Log in</span>
      {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
      <span className="breaker"> // </span>
      <span className="menu-button" onClick={()=>props.setShowSignUp(true)}>Sign up</span>
    </Fragment>
  )
}

export default LoginSignUp