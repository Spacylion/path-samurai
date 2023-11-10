import { Component } from "react"
import { connect } from "react-redux"
import {
  getStatus,
  updateStatus,
  getUserProfile,
} from "@/app/redux/reducers/profileReducer"
import Profile from "./Profile"
import { compose } from "redux"

class ProfileContainer extends Component {
  componentDidMount() {
    let targetUserId = this.props.authorizedUserId

    // Вызываем нужные методы при монтировании компонента
    this.props.getUserProfile(targetUserId)
    this.props.getStatus(targetUserId)

    if (!targetUserId) {
      targetUserId = this.props.authorizedUserId
      if (!targetUserId) {
        this.props.history.push("/login")
      }
    }
  }

  handleUpdateStatus = () => {
    const { userId } = this.props
    const targetUserId = userId
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
  authorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth,
})

export default compose(
  connect(mapStateToProps, {
    getUserProfile,
    getStatus,
    updateStatus,
  })
  // withAuthRedirect
)(ProfileContainer)
