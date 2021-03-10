import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div>
      <div>
        <textarea />
        <button>Add post</button>
      </div>
      <span>My Posts</span>
      <div className={s.posts}>
        <Post/>
        <Post/>
        <Post/>
      </div>
    </div>
  )
} 

export default MyPosts;