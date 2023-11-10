import React, { Component } from "react"
import { connect } from "react-redux"
import {
  follow,
  unfollow,
  setCurrentPage,
  toggleFollowingProgress,
  getUsers as getUsersAction, // Import getUsers as getUsersAction
} from "@/app/redux/reducers/usersReducer"
import Users from "./Users"
import Preloader from "@/features/preloader/Preloader"
import {
  getCurrentPage,
  getFollowingInProgress,
  getPageSize,
  getTotalUsersCount,
  getUsersSuperSelector,
} from "@/app/redux/selectors/users-selectors"

class UsersContainer extends Component {
  componentDidMount() {
    const { page, pageSize } = this.props
    this.props.getUsers(page, pageSize) // Dispatch getUsers using this.props
  }

  onPageChanged = (pageNumber) => {
    const { pageSize } = this.props
    this.props.getUsers(pageNumber, pageSize) // Dispatch getUsers using this.props
  }

  render() {
    const {
      isFetching,
      totalUsersCount,
      pageSize,
      page,
      users,
      follow,
      unfollow,
      followingInProgress,
    } = this.props

    return (
      <>
        {isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={totalUsersCount}
          pageSize={pageSize}
          page={page}
          onPageChanged={this.onPageChanged}
          users={users}
          follow={follow}
          unfollow={unfollow}
          followingInProgress={followingInProgress}
        />
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: getUsersSuperSelector(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    page: getCurrentPage(state),
    followingInProgress: getFollowingInProgress(state),
    isFetching: state.usersPage.isFetching,
  }
}

const mapDispatchToProps = {
  follow,
  unfollow,
  setCurrentPage,
  toggleFollowingProgress,
  getUsers: getUsersAction, // Use the imported getUsersAction
}

const ConnectedUsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersContainer)

export default ConnectedUsersContainer
