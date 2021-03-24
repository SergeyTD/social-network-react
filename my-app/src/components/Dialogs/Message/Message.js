import s from './Message.module.css';

const Message = (props) => {
  return (
    <div>
      <img src="https://static.ukrinform.com/photos/2020_02/thumb_files/630_360_1580657832-217.png" />
      <div className={s.message}>
        {props.message}
      </div>
    </div>
  )
}

export default Message;