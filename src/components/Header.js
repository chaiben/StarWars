import logo from "../assets/sw_logo.png";

export default function Header(){
  return (
    <header>
      <div></div>
      <div className="center"><img src={logo} alt="Star Wars Logo" /></div>
      <div className="user">
      {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
      Log in <span> // </span> Sign up
      </div>
    </header>
  );
}