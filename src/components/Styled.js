import styled, { keyframes } from 'styled-components';

const showDown = keyframes`
from {
  transform: scaleY(0);
  height:0 
}

to {
  transform: scaleY(1);
  height: 100%;
}
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 0.8rem;
  margin: 0.4rem 0;
  animation: ${showDown} 0.25s ease-in-out forwards;
 
`

export const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 1rem;
`

export const Input = styled.input`
  border-color: ${props => props.error ? 'red' : 'inherit'};
  border-radius: 3px;
  border-style: solid;
  border-width: 1px;
  color: ${props => props.error ? 'red' : 'inherit'};
  font-size: 0.9rem;
  height: 40px;
  line-height: 40px;
  padding: 0 15px;
  &:focus{
    border: 1px solid #edd700;
    line-height: 40px;
    padding: 0 15px;
    background-color: #484848;
    color: #edd700;
  }
`