import { useState } from "react";
import useForm from "../hook/useForm";
import TextField from "./formElements/TextField";
import PopupHeader from "./PopupHeader";
import { Fail, Success } from "./Styled";

export default function LogInForm(props){
  const {accounts, setAccounts} = props
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
    for (let i = 0; i < accounts.length; i++) {
      const account = accounts[i];
      if(account.email === formData.email && account.password === formData.password){
        setSuccess(true)
        console.log(account)
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
        title="Enter your email address"
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
        <button onClick={submitForm}>Log In</button>
        {success && <Success>Logged</Success>}
        {fail && <Fail>Email and password do not match.</Fail>}
      </div>
    </div>
  );
}