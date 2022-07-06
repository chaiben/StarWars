import { useEffect, useState } from "react";
import logo from "../assets/sw_logo.png";
import SignUpForm from "./SignUpForm";
import LogInForm from "./LogInForm";
import useLocalStorage from "../hook/useLocalStorage"

export default function Header(){
  const [showSignUp, setShowSignUp] = useState(false)
  const [showLogIn, setShowLogIn] = useState(false)
  const [accounts, setAccounts] = useLocalStorage("Header-accounts", [])

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
      <span className="menu-button" onClick={()=>setShowLogIn(true)}>Log in</span>
      {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
      <span className="breaker"> // </span>
      <span className="menu-button" onClick={()=>setShowSignUp(true)}>Sign up</span>
      </div>
      {showLogIn && <LogInForm 
        accounts={accounts} 
        setAccounts={setAccounts} 
        closeHandler={()=>setShowLogIn(false)} 
      />}
      {showSignUp && <SignUpForm 
        accounts={accounts} 
        setAccounts={setAccounts} 
        closeHandler={()=>setShowSignUp(false)} 
      />}
    </header>

  );
}