import { CHECKEMAIL, CHECKPASSWORD2 } from "../def"
import useLocalStorage from "./useLocalStorage"

export default function useForm(formName, initialFormData){
  const [formData, setFormData] = useLocalStorage(`${formName}-formData`, initialFormData)
  const [errorFormData, setErrorFormData] = useLocalStorage(`${formName}-errorFormData`, '')

  function handleChange(event) {
    const {name, value, type, checked} = event.target
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    })
    setErrorFormData({
      ...errorFormData,
      [name]: ""
    })
  }

  function validFormField(element, save){
    const {name, value, required, placeholder} = element;
    let errorFormDataAux = {}

    if(required && value !==''){
      errorFormDataAux = {
        ...errorFormData,
        [name]: ""
      } 
    } else { 
      errorFormDataAux = {
        ...errorFormData,
        [name]: (placeholder) ? 
         "Please enter your " + placeholder.toLowerCase() :
         "This field is required"
      }
    }
    if(value){
      switch (name) {
        case 'email':
          (value.match(CHECKEMAIL)) ? 
          errorFormDataAux = {
            ...errorFormData,
            [name]: ""
          } : 
          errorFormDataAux = {
            ...errorFormData,
            [name]: "Invalid email format"
          }
          break;
        case 'password':
          errorFormDataAux = (value.match(CHECKPASSWORD2)) ? 
          {
            ...errorFormData,
            [name]: ""
          } : 
          {
            ...errorFormData,
            [name]: `Your password must have:
            Minimum of 8 characters;
            Maximun of 16 characters;
            A minimum of 1 lower case letter,  1 upper case letter, 1 numeric character and 1 special character. Good luck!`
          }
          break;
      
        default:
          break;
      }
    }
    if(save === true)
      setErrorFormData(errorFormDataAux)
  
    return errorFormDataAux;
  }
  function validateAllForm(){
    let errorFormDataAux = {}
    Object.keys(formData).forEach(formName => {
      const element = document.getElementById(formName);
      errorFormDataAux = {
        ...errorFormDataAux,
        ...validFormField(element, false)
      }
    });
    setErrorFormData(errorFormDataAux);
    
    // Check if there is any error enabled
    const errorValues = Object.values(errorFormDataAux)
    for (let i = 0; i < errorValues.length; i++) {
      if(errorValues[i]){
        return false
      }
    }
    return true
  }

  return [
    formData, 
    errorFormData, 
    handleChange, 
    validFormField,
    validateAllForm,
    setFormData, 
    setErrorFormData,
  ]
}