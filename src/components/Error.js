import errorImg from "../assets/not-found.gif";
export default function Error(props){
  return (
    <div className="error">
      {props.message && <h3>{props.message} 🤷‍♂️</h3>}
      <img src={errorImg} alt="Error" />
    </div>
  );
}