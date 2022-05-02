import '../styles/navbar.css';

import  { NavLink } from "react-router-dom";


interface Props {}

function NavBar(props: Props) {
  return (
    <div className='nav-bar-container'>
    <NavLink className={({ isActive }) => isActive ? 'nav-bar-link active-button' : 'nav-bar-link'} to='/'>Home</NavLink>
    <NavLink className={({ isActive }) => isActive ? 'nav-bar-link active-button' : 'nav-bar-link'} to='/about'>About Me</NavLink>
    </div>
  );
}

export default NavBar;
