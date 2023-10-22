/* eslint-disable react/prop-types */
import s from "./Friend.module.css"

const Friend = (props) => {
  return (
    <div className={s.nav__friends}>
      <img src={props.image} className={s.friends__image} alt='' />
      <h3>{props.name}</h3>
    </div>
  )
}

export default Friend
