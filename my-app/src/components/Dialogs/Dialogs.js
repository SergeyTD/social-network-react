import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;

  return (
    <div className={s.dialog}>
      <NavLink to={path} activeClassName={s.activeLink}>{props.name}</NavLink>
    </div>
  )
}

const Massage = (props) => {
  return (
    <div className={s.massage}>
      {props.massage}
    </div>
  )
}

const Dialogs = (props) => {

  let dialogsData = [
    {id : 1, name : "Alena"},
    {id : 2, name : "Uriy"},
    {id : 3, name : "Valeria"},
    {id : 4, name : "Artem"},
    {id : 5, name : "Ira"}
  ]

  let messagesData = [
    {id : 1, message : "Hi!"},
    {id : 2, message : "How are you?"},
    {id : 3, message : "Nice!"}
  ]

  return (
    <div className={s.dialogs}>
      <section className={s.dialogsItem}>
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
        <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
        <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
        <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />
      </section>
      <section className={s.messages}>
        <Massage massage={messagesData[0].message} />
        <Massage massage={messagesData[1].message} />
        <Massage massage={messagesData[2].message} />
      </section>
    </div>
  )
}

export default Dialogs;