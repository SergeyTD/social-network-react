import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';

const Profile = () => {
  return (
    <main className={s.content}>
    <div>
      <img src="https://images.unsplash.com/photo-1432847712612-926caafaa802?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHw%3D&w=1000&q=80"/>
    </div>
    <div>
      ava + description
    </div>
    <MyPosts/>
  </main>
  )
} 

export default Profile;