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

const Message = (props) => {
  return (
    <div className={s.message}>
      {props.message}
    </div>
  )
}

const Dialogs = (props) => {

  // Sort of data from server 
  let dialogs = [
    {id : 1, name : "Alena"},
    {id : 2, name : "Uriy"},
    {id : 3, name : "Valeria"},
    {id : 4, name : "Artem"},
    {id : 5, name : "Ira"}
  ]

  let messages = [
    {id : 1, message : "Hi!"},
    {id : 2, message : "How are you?"},
    {id : 3, message : "Nice!"}
  ]

  // Component

  let dialogsElements = dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);
  let messagesElements = messages.map(message => <Message message={message.message} />);

  return (
    <div className={s.dialogs}>
      <section className={s.dialogsItem}>
        {dialogsElements}
      </section>
      <section className={s.messages}>
        {messagesElements}
      </section>
    </div>
  )
}

export default Dialogs;