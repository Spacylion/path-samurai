/* eslint-disable react/jsx-key */
import React from "react"
import PropTypes from "prop-types"
import s from "./Users.module.css"
import axios from "axios"
import userPhoto from "../../../assets/avatar.png"

class Users extends React.Component {
  // можно не писать если конструктор ничего не делает кроме создания
  // и перебрасывания в супер компонент, то можно не писать
  // constructor(props) {
  //   super(props)
  // }

  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items)
      })
  }

  render() {
    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i)
    }

    return (
      <div className={s.title}>
        <div>
          {pages.map((p) => {
            return (
              <span
                className={this.props.currentPage === p && s.selected}
                onClick={() => {
                  this.props.setCurrentPage(p)
                }}
              >
                {p}
              </span>
            )
          })}
        </div>
        {this.props.users.map((u) => (
          <div key={u.id}>
            <span>
              <div>
                <img
                  src={u.photos.small != null ? u.photos.small : userPhoto}
                  alt=''
                  className={s.userPhoto}
                />
              </div>
              <div>
                {u.followed ? (
                  <button
                    onClick={() => {
                      this.props.unfollow(u.id)
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      this.props.follow(u.id)
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
              <div>{"u.location.country"}</div>
              <div>{"u.location.city"}</div>
            </span>
          </div>
        ))}
      </div>
    )
  }
}

Users.propTypes = {
  users: PropTypes.array.isRequired,
  follow: PropTypes.func.isRequired,
  unfollow: PropTypes.func.isRequired,
  setUsers: PropTypes.func.isRequired,
}

export default Users
