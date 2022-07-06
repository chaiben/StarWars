import { useState } from "react";
import useForm from "../hook/useForm";
import TextField from "./formElements/TextField";
import PopupHeader from "./PopupHeader";
import { Success } from "./Styled";

export default function SignUpForm(props){
  const {accounts, setAccounts} = props
  const [success, setSuccess] = useState(false);
  
  const initialFormData = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    showPassword: false
  }

  const [
    formData, 
    errorFormData, 
    handleChange, 
    validFormField,
    validateAllForm,
    setFormData, 
    setErrorFormData, 
  ] = useForm('SignUpForm', initialFormData);

  const passwordType = (formData.showPassword)?'text':'password'

  function submitForm(){
    if(!validateAllForm())
      return

    // Check if the email already exist
    for (let i = 0; i < accounts.length; i++) {
      const account = accounts[i];
      if(account.email === formData.email){
        setErrorFormData(
          {
            ...errorFormData,
            email: `${formData.email} is already registred`
          }
        )
        setSuccess(false)
        return
      }
    }  
    
    // Save account
    setSuccess(true)

    setAccounts((
      [
        ...accounts,
        formData
      ]
    ))

    // Clean form
    setFormData(initialFormData)
  }

  return (
    <div className="popup show1s">
      <div className="popup-content">
      <PopupHeader 
      title="Create your account"
      closeHandler={props.closeHandler} 
      />
      <TextField 
        error={errorFormData.firstName}
        id='firstName'
        name='firstName'
        onBlur={(e) => validFormField(e.target)}
        onChange={handleChange}
        placeholder='First Name'
        required='1'
        type='text' 
        value={formData.firstName}
      />
      <TextField
        error={errorFormData.lastName}
        id='lastName' 
        name='lastName' 
        onBlur={(e) => validFormField(e.target)}
        onChange={handleChange}
        placeholder='Last Name'
        required='1'
        type='text' 
        value={formData.lastName}
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
      <button onClick={submitForm}>Create Account</button>
      {success && <Success>User saved</Success>}
      </div>
    </div>
  );
}