import s from './Dialogs.module.css';

const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <section className={s.dialogsItem}>
        <div className={`${s.dialog} ${s.active}`}>
          Alena
        </div>
        <div className={s.dialog}>
          Uriy
        </div>
        <div className={s.dialog}>
          Valeria
        </div>
      </section>
      <section className={s.messages}>
        <div className={s.massage}>
          Hi!
        </div>
        <div className={s.massage}>
          How are you?
        </div>
        <div className={s.massage}>
          Nice!
        </div>
      </section>
    </div>
  )
}

export default Dialogs;