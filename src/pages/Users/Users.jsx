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
  currentPage,
  ...props
}) => {
  return (
    <div className={s.title}>
      <Paginator
        currentPage={currentPage}
        onPageChanged={onPageChanged}
        totalUsersCount={totalUsersCount}
        pageSize={pageSize}
      />
      <div>
        {users.map((u) => (
          <User
            user={u}
            followingInProgress={followingInProgress}
            key={u.id}
            follow={follow}
            unfollow={unfollow}
          />
        ))}
      </div>
    </div>
  )
}

export default Users
