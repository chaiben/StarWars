import { useEffect, useState } from "react";
import logo from "../assets/sw_logo.png";
import SignUpForm from "./SignUpForm";
import LogInForm from "./LogInForm";
import useLocalStorage from "../hook/useLocalStorage"
import LoginSignUp from "./LoginSignUp";
import LoggedMenu from "./LoggedMenu";

export default function Header(props){
  const [showSignUp, setShowSignUp] = useState(false)
  const [showLogIn, setShowLogIn] = useState(false)
  const [accounts, setAccounts] = useLocalStorage("Header-accounts", [])
  const {currentUser, setCurrentUser} = props
  const authUser = (currentUser) ? true : false

  // Remove scrolling when popup is open
  useEffect(()=>{
    (showSignUp || showLogIn) ?
    document.querySelector("body").classList.add("overflow-hidden") :
    document.querySelector("body").classList.remove("overflow-hidden")
  })

  return (
    <header>
      <div></div>
      <div className="center"><img src={logo} alt="Star Wars Logo" /></div>
      <div className="user">
      {!authUser && <LoginSignUp setShowLogIn={setShowLogIn} setShowSignUp={setShowSignUp} />}
      {authUser && <LoggedMenu name={currentUser.firstName} setCurrentUser={setCurrentUser} />}
      </div>
      {showLogIn && <LogInForm 
        accounts={accounts}
        closeHandler={()=>setShowLogIn(false)}
        setCurrentUser={setCurrentUser}
      />}
      {showSignUp && <SignUpForm 
        accounts={accounts}
        setAccounts={setAccounts}
        closeHandler={()=>setShowSignUp(false)}
      />}
    </header>

  );
}