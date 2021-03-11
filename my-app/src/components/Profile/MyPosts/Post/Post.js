import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="http://ki.ill.in.ua/m/670x450/12891200.jpg" alt="avatar"/>
      <span>{ props.message }</span>
      <div>
        <span>like </span>
        <span>{ props.likesCount }</span>
      </div>
    </div>
  )
} 

export default Post;