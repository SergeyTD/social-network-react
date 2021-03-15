import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
  return (
    <div>
      <div className={s.wallPaper}>
        <img src="https://illustrators.ru/uploads/user/cover/163787/main_ytj-normal-750-300.png" />
      </div>
      <div className={s.info}>
        ava + description
      </div>
    </div>  
  )
}

export default ProfileInfo;