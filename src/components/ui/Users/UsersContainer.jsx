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
import Preloader from "../../../Features/Preloader/Preloader"
import { compose } from "redux"
import { withAuthRedirect } from "../../../hoc/withAuthRedirect"
import {
  getCurrentPage,
  getFollowingInProgress,
  getIsFetching,
  getPageSize,
  getTotalUsersCount,
  getUsersSelector,
} from "../../../redux/selectors/users-selectors"

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.page, this.props.pageSize)
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
          page={this.props.page}
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

// let mapStateToProps = (state) => {
//   return {
//     users: state.usersPage.users,
//     pageSize: state.usersPage.pageSize,
//     totalUsersCount: state.usersPage.totalUsersCount,
//     currentPage: state.usersPage.currentPage,
//     isFetching: state.usersPage.isFetching,
//     followingInProgress: state.usersPage.followingInProgress,
//   }
// }

let mapStateToProps = (state) => {
  return {
    users: getUsersSelector(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    page: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
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
  page: PropTypes.number.isRequired,
  onPageChanged: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired,
  follow: PropTypes.func.isRequired,
  unfollow: PropTypes.func.isRequired,
  followingInProgress: PropTypes.array.isRequired,
}

export default compose(
  // withAuthRedirect,
  connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    toggleFollowingProgress,
    getUsers: getUsers,
  })
)(UsersContainer)
