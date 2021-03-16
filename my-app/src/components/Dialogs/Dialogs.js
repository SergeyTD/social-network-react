import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';

const Dialogs = (props) => {

  let dialogsElements = props.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);
  let messagesElements = props.messages.map(message => <Message message={message.message} />);

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