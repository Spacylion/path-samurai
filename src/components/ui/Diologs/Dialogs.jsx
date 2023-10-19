import s from "./Dialogs.module.css"

const Dialogs = () => {
  return (
    <div className={s.content}>
      <div className={s.content__columns}>
        <div className={`${s.content__column} ${s.left}`}>
          <div className={s.column__item}>1</div>
          <div className={s.column__item}>2</div>
          <div className={s.column__item}>3</div>
        </div>
        <div className={`${s.content__column} ${s.right}`}>
          <div className={s.column__item}>1</div>
          <div className={s.column__item}>2</div>
          <div className={s.column__item}>3</div>
        </div>
      </div>
    </div>
  )
}

export default Dialogs
