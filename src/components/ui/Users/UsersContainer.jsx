import React from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import {
  follow,
  setCurrentPage,
  unfollow,
  toggleFollowingProgress,
  getUsers,
} from "../../../redux/reducers/usersReducer"
import Users from "./Users"
import Preloader from "../../features/Preloader/Preloader"
import { compose } from "redux"
import { withAuthRedirect } from "../../../hoc/withAuthRedirect"

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize)
  }

  onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize)
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

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  }
}

const ConnectedUsers = connect(mapStateToProps, {
  follow,
  unfollow,
  setCurrentPage,
  toggleFollowingProgress,
  getUsers: getUsers,
})(UsersContainer)

Users.propTypes = {
  totalUsersCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChanged: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired,
  follow: PropTypes.func.isRequired,
  unfollow: PropTypes.func.isRequired,
  followingInProgress: PropTypes.array.isRequired,
}

export default compose(
  withAuthRedirect, //redirect to login
  connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    toggleFollowingProgress,
    getUsers: getUsers,
  })
)(UsersContainer)
