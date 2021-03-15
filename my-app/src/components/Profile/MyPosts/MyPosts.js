import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

  let postData = [
    {id : 1, message : "Hi, how are you?", likesCount : 5},
    {id : 2, message : "It's my first post!", likesCount : 10}
  ]

  return (
    <div className={s.myPosts}>
      <div>
        <textarea />
        <button>Add post</button>
      </div>
      <h3>My Posts</h3>
      <div className={s.posts}>
        <Post message={postData[0].message} likesCount={postData[0].likesCount} />
        <Post message={postData[1].message} likesCount={postData[1].likesCount} />
      </div>
    </div>
  )
} 

export default MyPosts;