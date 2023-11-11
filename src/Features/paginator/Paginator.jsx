import { useState } from "react"
import s from "./Paginator.module.css"
import cn from "classnames"

const Paginator = ({
  totalItemsCount,
  pageSize,
  onPageChanged,
  currentPage,
  portionSize = 10,
}) => {
  if (
    totalItemsCount === 0 ||
    pageSize === 0 ||
    portionSize > totalItemsCount
  ) {
    return null
  }

  const pagesCount = Math.ceil(totalItemsCount / pageSize)
  const pages = Array.from({ length: pagesCount }, (_, index) => index + 1)

  const portionCount = Math.ceil(pagesCount / portionSize)
  const [portionNumber, setPortionNumber] = useState(1)
  const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
  const rightPortionPageNumber = Math.min(
    portionNumber * portionSize,
    pagesCount
  )

  return (
    <div className={s.title + s.paginator}>
      {portionNumber > 1 && (
        <button onClick={() => setPortionNumber(portionNumber - 1)}>
          Previous
        </button>
      )}
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
              onClick={() => onPageChanged(p)}
            >
              {p}
            </span>
          ))}
        {portionNumber < portionCount && (
          <button onClick={() => setPortionNumber(portionNumber + 1)}>
            Next
          </button>
        )}
      </div>
    </div>
  )
}

export default Paginator
