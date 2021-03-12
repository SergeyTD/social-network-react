import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';

const Profile = () => {
  return (
    <main className={s.content}>
      <div className={s.wallPaper}>
        <img src="https://illustrators.ru/uploads/user/cover/163787/main_ytj-normal-750-300.png" />
      </div>
      <div>
        ava + description
      </div>
      <MyPosts />
    </main>
  )
}

export default Profile;