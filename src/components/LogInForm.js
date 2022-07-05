import useForm from "../hook/useForm";
import TextField from "./formElements/TextField";
import PopupHeader from "./PopupHeader";

export default function LogInForm(props){
  const initialFormData = {
    email: "",
    password: "",
    showPassword: false
  }

  const [
    formData, 
    errorFormData, 
    handleChange, 
    validFormField
  ] = useForm('LoginForm', initialFormData);

  const passwordType = (formData.showPassword)?'text':'password'


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