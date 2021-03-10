import s from './Post.module.css';

const Post = () => {
  return (
    <div className={s.item}>
      <img src="http://ki.ill.in.ua/m/670x450/12891200.jpg" alt="avatar"/>
      <span>Post</span>
      <div>
        <span>like</span>
      </div>
    </div>
  )
} 

export default Post;