import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  let postsElement = props.posts.map(post => <Post message={post.message} likesCount={post.likesCount} />);

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