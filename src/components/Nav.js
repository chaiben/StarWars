import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavBox = styled.div`
`;

export default function Nav(){
  return (
    <NavBox>
      <ul>
        <li><NavLink to="/">Inicio</NavLink></li>
        <li><NavLink to="/starships">Starships</NavLink></li>
      </ul>
    </NavBox>
  );
}