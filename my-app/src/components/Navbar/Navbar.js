import { NavLink } from 'react-router-dom';
import Friends from './Friends/Friends';
import s from './Navbar.module.css';

const Navbar = (props) => {

  let friendsElement = props.state.friends.map(friend => <Friends photo={friend.photo} />);

  return (
  <nav className={s.nav}>
    <div className={s.item}>
      <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to="/dialogs" activeClassName={s.activeLink}>Dialogs</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to="/news" activeClassName={s.activeLink}>News</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to="/music" activeClassName={s.activeLink}>Music</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to="/setting" activeClassName={s.activeLink}>Settings</NavLink>
    </div>
    <div>
      <div>Friends</div>
      <div>
        {friendsElement}
      </div>
    </div>
  </nav>
  )
} 

export default Navbar;