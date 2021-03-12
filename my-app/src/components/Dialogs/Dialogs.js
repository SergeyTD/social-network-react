import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <section className={s.dialogsItem}>
        <div className={s.dialog}>
          <NavLink to="/dialogs/1" activeClassName={s.activeLink}>Alena</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/2" activeClassName={s.activeLink}>Uriy</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/3" activeClassName={s.activeLink}>Valeria</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/4" activeClassName={s.activeLink}>Artem</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/5" activeClassName={s.activeLink}>Ira</NavLink>
        </div>
      </section>
      <section className={s.messages}>
        <div className={s.massage}>
          Hi!
        </div>
        <div className={s.massage}>
          How are you?
        </div>
        <div className={s.massage}>
          Nice!
        </div>
      </section>
    </div>
  )
}

export default Dialogs;