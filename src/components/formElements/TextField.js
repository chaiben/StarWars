import { ErrorMessage, FieldContainer, Input } from "../Styled";


const TextField = (props) => {
  const required = (props.required)? 1 : 0;
  return (
    <FieldContainer>
      <Input
        error={props.error}
        id={props.id}
        name={props.name}
        onBlur={props.onBlur}
        onChange={props.onChange}
        placeholder={props.placeholder}
        required={required}
        type={props.type}
        value={props.value}
      />
      {props.error &&<ErrorMessage className="showMsg">{props.error}</ErrorMessage>}
    </FieldContainer>
  )
}

export default TextField;