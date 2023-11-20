import React from "react"
import {connect} from "react-redux"
import {
    follow,
    unfollow,
    requestUsers,
    setCurrentPage,
    toggleFollowingProgress,
} from "../../app/providers/reducers/usersReducer"
import Users from "./Users"
import Preloader from "../../features/Preloader/Preloader.jsx"
import {
    getCurrentPage, getFollowingInProgress, getIsFetching,
    getPageSize, getTotalUsersCount, getUsers,
} from "../../app/providers/selectors/users-selectors"
import {AppStateType} from "../../app/providers/reducers/rootReducer";
import {UserType} from "../../shared/config/types/types";

type MapStatePropsType = {
    users: Array<UserType>
    currentPage: number
    pageSize: number
    isFetching: boolean
    totalUsersCount: number
    followingInProgress: Array<number>,
}
type MapDispatchPropsType = {
    getUsers: (currentPage: number, pageSize: number) => void
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}
type OwnPropsType = { //pure props from App
    pageTitle: string
}
type PropsType = MapStatePropsType & MapDispatchProps & OwnPropsType

class UsersContainer extends React.Component<PropsType, any> {
    componentDidMount() {
        const {currentPage, pageSize} = this.props
        this.props.getUsers(currentPage, pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        const {pageSize} = this.props
        this.props.getUsers(pageNumber, pageSize)
    }

    render() {
        return (
            <>
                <h2>{this.props.pageTitle}</h2>
                {this.props.isFetching ? <Preloader/> : null}
                <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    users={this.props.users}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    followingInProgress={this.props.followingInProgress}
                />
            </>
        )
    }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        totalUsersCount: getTotalUsersCount(state),
        followingInProgress: getFollowingInProgress(state),
    }
}

const mapDispatchToProps = {follow, unfollow, getUsers: requestUsers, setCurrentPage, toggleFollowingProgress,}
const ConnectedUsersContainer = connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>
(mapStateToProps, mapDispatchToProps)
(UsersContainer)
export default ConnectedUsersContainer
