import React from "react"
import s from "./Paginator.module.css"

const UsersPaginator = ({ totalUsersCount, pageSize, onPageChanged, page }) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize)

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
            className={page === p ? s.selected : ""}
            onClick={() => {
              onPageChanged(p)
            }}
          >
            {p}
          </span>
        ))}
      </div>
    </div>
  )
}

export default UsersPaginator
