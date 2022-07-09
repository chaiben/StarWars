import { useState } from "react";
import useForm from "../hook/useForm";
import TextField from "./formElements/TextField";
import PopupHeader from "./PopupHeader";
import { Fail, Success } from "./Styled";

export default function LogInForm(props){
  const {accounts} = props
  const [success, setSuccess] = useState(false);
  const [fail, setFail] = useState(false);
  const initialFormData = {
    email: "",
    password: "",
    showPassword: false
  }

  const [
    formData, 
    errorFormData, 
    handleChange, 
    validFormField,
    validateAllForm
  ] = useForm('LoginForm', initialFormData);

  const passwordType = (formData.showPassword)?'text':'password'

  function submitForm(){
    setSuccess(false)
    setFail(false)
    if(!validateAllForm())
      return

    // Check user
    for (let account of accounts) {
      if(account.email === formData.email && account.password === formData.password){
        props.setCurrentUser(account);
        setSuccess(account.firstName);
        return
      }
    }
    
    // Save account
    setFail(true)
  }


  return (
    <div className="popup show1s">
      <div className="popup-content">
        <PopupHeader 
        title="Log In"
        closeHandler={props.closeHandler} 
        />
        <TextField
        error={errorFormData.email}
        id='email'
        name='email' 
        onBlur={(e) => validFormField(e.target)}
        onChange={handleChange}
        placeholder='Email Address'
        required='1'
        type='email' 
        value={formData.email}
      />
      <TextField
        error={errorFormData.password}
        id='password' 
        name='password' 
        onBlur={(e) => validFormField(e.target)}
        onChange={handleChange}
        placeholder='Password'
        required='1'
        type={passwordType} 
        value={formData.password}
      />
      <div className="container-checkbox">
        <input 
          type="checkbox" 
          id="showPassword" 
          checked={formData.showPassword}
          onChange={handleChange}
          name="showPassword"
        />
        <label 
          htmlFor="showPassword">
            Show password
        </label>
      </div>
        <button onClick={submitForm}>Send</button>
        {success && <Success onClick={props.closeHandler}>Welcome {success} - click to close</Success>}
        {fail && <Fail>Email and password do not match.</Fail>}
      </div>
    </div>
  );
}