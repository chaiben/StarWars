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

  function validFormField(event){
    const {name, value, required, placeholder} = event.target;
    if(required){
      value ? 
      setErrorFormData({
        ...errorFormData,
        [name]: ""
      }) : 
      setErrorFormData({
        ...errorFormData,
        [name]: (placeholder) ? 
         "Please enter your " + placeholder.toLowerCase() :
         "This field is required"
      })
    }
    if(required && !value)
      return;

    switch (name) {
      case 'email':
        (value.match(CHECKEMAIL)) ? 
        setErrorFormData({
          ...errorFormData,
          [name]: ""
        }) : 
        setErrorFormData({
          ...errorFormData,
          [name]: "Invalid email format"
        })
        break;
      case 'password':
        (value.match(CHECKPASSWORD2)) ? 
        setErrorFormData({
          ...errorFormData,
          [name]: ""
        }) : 
        setErrorFormData({
          ...errorFormData,
          [name]: `Your password must have:
          Minimum of 8 characters;
          Maximun of 16 characters;
          A minimum of 1 lower case letter,  1 upper case letter, 1 numeric character and 1 special character. Good luck!`
        })
        break;
    
      default:
        break;
    }
  }

  return [
    formData, 
    errorFormData, 
    handleChange, 
    validFormField,
    setFormData, 
    setErrorFormData,
  ]
}