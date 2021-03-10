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
    <div>
      my posts
      <div>
        new post
      </div>
      <div>
        post 1
      </div>
      <div>
        post 2
      </div>
    </div>
  </main>
  )
} 

export default Profile;