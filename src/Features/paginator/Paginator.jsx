import { useState } from "react"
import s from "./Paginator.module.css"
import cn from "classnames"

const Paginator = ({
  totalUsersCount,
  pageSize,
  onPageChanged,
  currentPage, // Changed from 'page' to 'currentPage' for consistency
  portionSize = 10,
}) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize)
  if (totalUsersCount === 0 || pageSize === 0) {
    return null // or some default behavior
  }
  let pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  let portionCount = Math.ceil(pagesCount / portionSize)
  let [portionNumber, setPortionNumber] = useState(1)
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
  let rightPortionPageNumber = portionNumber * portionSize

  return (
    <div className={s.title}>
      <div>
        {pages
          .filter(
            (p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber
          )
          .map((p) => (
            <span
              key={p}
              className={cn({
                [s.selectedPage]: currentPage === p,
                [s.pageNumber]: true,
              })}
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

export default Paginator
