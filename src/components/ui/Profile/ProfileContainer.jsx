import React, { Component } from "react"
import { connect } from "react-redux"
import {
  getStatus,
  updateStatus,
  getUserProfile,
} from "../../../redux/reducers/profileReducer"
import Profile from "./Profile"
import { compose } from "redux"

class ProfileContainer extends Component {
  componentDidMount() {
    const { userId } = this.props // Получаем userId из props
    const targetUserId = userId || 8

    // Вызываем нужные методы при монтировании компонента
    this.props.getUserProfile(targetUserId)
    this.props.getStatus(targetUserId)
  }

  handleUpdateStatus = () => {
    const { userId } = this.props // Получаем userId из props
    const targetUserId = userId || 8
    this.props.updateStatus(targetUserId)
  }

  render() {
    return (
      <div>
        <Profile
          profile={this.props.profile}
          status={this.props.status}
          isAuth={this.props.isAuth}
          updateStatus={this.handleUpdateStatus}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
})

export default compose(
  connect(mapStateToProps, {
    getUserProfile,
    getStatus,
    updateStatus,
  })
  // withAuthRedirect
)(ProfileContainer)
