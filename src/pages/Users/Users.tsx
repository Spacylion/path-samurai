import React, {FC} from "react"
import s from "./Users.module.css"
import Paginator from "../../features/paginator/Paginator"
import User from "./users-item/User.tsx"
import {UserType} from "../../shared/config/types/types";

type PropTypes = {
    page: number
    totalUsersCount: number
    pageSize: number
    onPageChanged,
    users: Array<UserType>
    followingInProgress: Array<number>,
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    currentPage: number
}

let Users: FC<PropTypes> = ({
                                currentPage,
                                pageSize,
                                totalUsersCount,
                                page,
                                onPageChanged,
                                users,
                                followingInProgress,
                                follow,
                                unfollow,
                                ...props
                            }) => {
    return (
        <div className={s.title}>
            <Paginator
                currentPage={currentPage}
                onPageChanged={onPageChanged}
                totalItemsCount={totalUsersCount}
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
