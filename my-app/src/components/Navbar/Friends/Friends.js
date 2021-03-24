import s from './Friends.module.css';

const Friends = (props) => {
  return (
      <img src={props.photo} className={s.photo} />
  )
} 

export default Friends;