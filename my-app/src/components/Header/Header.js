import s from './Header.module.css';
import { NavLink } from 'react-router-dom';


const Header = () => {
  return (
    <header className={s.header}>
      <NavLink  to='/profile' className={s.logo}>
        <img src="https://cdn4.iconfinder.com/data/icons/Birdies_by_arrioch/png%20512/twitter%20follow%20me.png" />
        <span>Follow me</span>
      </NavLink>
    </header>
  )
}

export default Header;