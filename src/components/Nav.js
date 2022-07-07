import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavBox = styled.nav``;

export default function Nav(){
  return (
    <NavBox>
      <ul>
        <li><NavLink to="/">Welcome<span className='horizontal-bar'></span></NavLink></li>
        <li><NavLink to="/starships">Starships<span className='horizontal-bar'></span></NavLink></li>
        {/* <li><NavLink to="/styles">Styles guide<span className='horizontal-bar'></span></NavLink></li> */}
      </ul>
    </NavBox>
  );
}