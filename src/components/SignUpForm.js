import useForm from "../hook/useForm";
import TextField from "./formElements/TextField";
import PopupHeader from "./PopupHeader";

export default function SignUpForm(props){
  
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
    validFormField
  ] = useForm('SignUpForm', initialFormData);

  const passwordType = (formData.showPassword)?'text':'password'

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
        onBlur={validFormField}
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
        onBlur={validFormField}
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
        onBlur={validFormField}
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
        onBlur={validFormField}
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
      <button>Continue</button>
      </div>
    </div>
  );
}