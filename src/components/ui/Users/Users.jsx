import PropTypes from "prop-types"
import s from "./Users.module.css"

let Users = (props) => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        name: "John Doe",
        status: "Active",
        location: { city: "New York", country: "USA" },
        followed: true,
        avatar: "https://www.iconbolt.com/iconsets/ionicons-regular/person.svg",
      },
      {
        id: 2,
        name: "Alice Smith",
        status: "Offline",
        location: { city: "Los Angeles", country: "USA" },
        followed: false,
        avatar: "https://www.iconbolt.com/iconsets/ionicons-regular/person.svg",
      },
      {
        id: 3,
        name: "Bob Johnson",
        status: "Online",
        location: { city: "Chicago", country: "USA" },
        followed: false,
        avatar: "https://www.iconbolt.com/iconsets/ionicons-regular/person.svg",
      },
      {
        id: 4,
        name: "Emily Wilson",
        status: "Away",
        location: { city: "San Francisco", country: "USA" },
        followed: true,
        avatar: "https://www.iconbolt.com/iconsets/ionicons-regular/person.svg",
      },
      {
        id: 5,
        name: "Michael Brown",
        status: "Active",
        location: { city: "London", country: "UK" },
        followed: true,
        avatar: "https://www.iconbolt.com/iconsets/ionicons-regular/person.svg",
      },
    ])
  }

  return (
    <div className={s.title}>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <img src={u.avatar} alt='' className={s.userPhoto} />
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(u.id)
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
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
            <div>{u.location.country}</div>
            <div>{u.location.city}</div>
          </span>
        </div>
      ))}
    </div>
  )
}

Users.propTypes = {
  users: PropTypes.array.isRequired,
  follow: PropTypes.func.isRequired,
  unfollow: PropTypes.func.isRequired,
  setUsers: PropTypes.array.isRequired,
}

export default Users
