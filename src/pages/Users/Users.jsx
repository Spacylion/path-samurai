import s from "./Users.module.css"
import Paginator from "@/features/paginator/Paginator"
import User from "./users-item/User"

let Users = ({
  page,
  totalUsersCount,
  pageSize,
  onPageChanged,
  users,
  followingInProgress,
  follow,
  unfollow,
}) => {
  console.log("Users component props:", page, totalUsersCount, pageSize)
  console.log("Users array:", users)
  return (
    <div className={s.title}>
      <Paginator
        totalItemsCount={totalUsersCount}
        pageSize={pageSize}
        onPageChanged={onPageChanged}
        page={page}
      />
      <div>
        {users.map((u) => (
          <User
            followingInProgress={followingInProgress}
            key={u.id}
            user={u}
            follow={follow}
            unfollow={unfollow}
          />
        ))}
      </div>
    </div>
  )
}

export default Users
