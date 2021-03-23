import s from './Message.module.css';

const Message = (props) => {
  return (
    <div className={s.message}>
      <img src="https://static.ukrinform.com/photos/2020_02/thumb_files/630_360_1580657832-217.png" />
      {props.message}
    </div>
  )
}

export default Message;