// User.jsx
import { NavLink } from "react-router-dom"
import userPhoto from "@/app/assets/avatar.png"
import s from "./User.module.css"

let User = ({ user, followingInProgress, follow, unfollow }) => {
  return (
    <div className={s.title}>
      <span>
        <div>
          <NavLink to={"/profile/" + user.id}>
            <img
              src={user.photos.small != null ? user.photos.small : userPhoto}
              alt=''
              className={s.userPhoto}
            />
          </NavLink>
        </div>
        <div>
          {user.followed ? (
            <button
              disabled={followingInProgress.some((id) => id === user.id)}
              onClick={() => {
                unfollow(user.id)
              }}
            >
              Unfollow
            </button>
          ) : (
            <button
              disabled={followingInProgress.some((id) => id === user.id)}
              onClick={() => {
                follow(user.id)
              }}
            >
              Follow
            </button>
          )}
        </div>
      </span>
      <span>
        <div>{user.name}</div>
        <div>{user.status}</div>
      </span>
      <span>
        <div>{user.location?.country}</div>
        <div>{user.location?.city}</div>
      </span>
    </div>
  )
}

export default User
