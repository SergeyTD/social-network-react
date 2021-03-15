import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

  // Sort of data from server
  let posts = [
    {id : 1, message : "Hi, how are you?", likesCount : 5},
    {id : 2, message : "It's my first post!", likesCount : 10}
  ]

  // Component

  let postsElement = posts.map(post => <Post message={post.message} likesCount={post.likesCount} />);

  return (
    <div className={s.myPosts}>
      <div>
        <textarea />
        <button>Add post</button>
      </div>
      <h3>My Posts</h3>
      <div className={s.posts}>
        {postsElement}
      </div>
    </div>
  )
} 

export default MyPosts;