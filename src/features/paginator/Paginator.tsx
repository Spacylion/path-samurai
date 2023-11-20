// Paginator Component
import React, {FC, useState} from "react";
import s from "./Paginator.module.css";
import cn from 'classnames';

type PropsType = {
    totalUsersCount: number;
    pageSize: number;
    currentPage: number;
    onPageChanged: (pageNumber: number) => void;
    portionSize?: number;
};

const Paginator: FC<PropsType> = ({
                                      totalUsersCount, pageSize,
                                      currentPage,
                                      onPageChanged,
                                      portionSize = 10,
                                  }) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages: Array<number> = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    const handlePageClick = (pageNumber: number) => {
        onPageChanged(pageNumber);
    };

    return (
        <div className={s.paginator}>
            {portionNumber > 1 && (
                <button onClick={() => setPortionNumber(portionNumber - 1)}>PREV</button>
            )}
            {pages
                .filter((p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map((p) => (
                    <span
                        className={cn({[s.selectedPage]: currentPage === p}, s.pageNumber)}
                        key={p}
                        onClick={() => handlePageClick(p)}
                    >{p}</span>
                ))
            }
            {portionCount > portionNumber && (
                <button onClick={() => setPortionNumber(portionNumber + 1)}>NEXT</button>
            )}
        </div>
    );
};

export default Paginator;
