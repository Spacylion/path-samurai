/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import s from "./Friends.module.css"
import Friend from "./Friend/Friend"

const Friends = (props) => {
  // debugger
  let FriendData = props.friends.map((f) => {
    return <Friend image={f.image} name={f.name} />
  })

  return (
    <div className={s.friends__content}>
      <h3 className={s.nav__text}>Friends</h3>
      <div className={s.frineds__wrapper}>{FriendData}</div>
    </div>
  )
}

export default Friends
