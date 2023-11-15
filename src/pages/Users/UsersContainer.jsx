import React from "react"
import { Component } from "react"
import { connect } from "react-redux"
import {
  follow,
  unfollow,
  setCurrentPage,
  toggleFollowingProgress,
  getUsers as getUsersAction,
} from "@/app/redux/reducers/usersReducer"
import Users from "./Users"
import Preloader from "@/features/Preloader/Preloader"
import {
  getCurrentPage,
  getFollowingInProgress,
  getPageSize,
  getTotalUsersCount,
  getUsersSuperSelector,
} from "@/app/redux/selectors/users-selectors"

class UsersContainer extends Component {
  componentDidMount() {
    const { currentPage, pageSize } = this.props
    this.props.getUsers(currentPage, pageSize)
  }

  onPageChanged = (pageNumber) => {
    const { pageSize } = this.props
    this.props.getUsers(pageNumber, pageSize)
  }

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
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

const mapStateToProps = (state) => {
  return {
    users: getUsersSuperSelector(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    followingInProgress: getFollowingInProgress(state),
    isFetching: state.usersPage.isFetching,
  }
}

const mapDispatchToProps = {
  follow,
  unfollow,
  setCurrentPage,
  toggleFollowingProgress,
  getUsers: getUsersAction,
}

const ConnectedUsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersContainer)

export default ConnectedUsersContainer
