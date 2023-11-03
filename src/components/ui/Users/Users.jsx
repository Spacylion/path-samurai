import { NavLink } from "react-router-dom"
import userPhoto from "../../../assets/avatar.png"
import s from "./Users.module.css"
import { follow, unfollow } from "../../../redux/reducers/usersReducer"

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

  let pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  return (
    <div className={s.title}>
      <div>
        {pages.map((p) => (
          <span
            key={p}
            className={props.currentPage === p ? s.selected : ""}
            onClick={() => {
              props.onPageChanged(p) // You need to pass onPageChanged as a prop
            }}
          >
            {p}
          </span>
        ))}
      </div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <NavLink to={"/profile" + u.id}>
                <img
                  src={u.photos.small || userPhoto}
                  alt=''
                  className={s.userPhoto}
                />
              </NavLink>
            </div>
            <div>
              {u.followed ? (
                <button
                  disabled={props.followingInProgress.some((id) => id === u.id)}
                  onClick={() => {
                    props.unfollow(u.id)
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  disabled={props.followingInProgress.some((id) => id === u.id)}
                  onClick={() => {
                    props.follow(u.id)
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <div>{u.name}</div>
            <div>{u.status}</div>
          </span>
          <span>
            <div>{u.location?.country}</div>
            <div>{u.location?.city}</div>
          </span>
        </div>
      ))}
    </div>
  )
}

export default Users
