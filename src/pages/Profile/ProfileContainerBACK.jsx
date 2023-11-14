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
    console.log("Props:", this.props)
    const { match } = this.props
    const userId = match.params.userId
    this.fetchProfileData(userId)
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.fetchProfileData(this.props.match.params.userId)
    }
  }

  fetchProfileData(userId) {
    if (!userId) {
      userId = this.props.authorizedUserId
      if (!userId) {
        this.props.history.push("/login")
        return
      }
    }

    // Fetch profile and status data
    this.props.getUserProfile(userId)
    this.props.getStatus(userId)
  }

  render() {
    return (
      <Profile
        {...this.props}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
      />
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
)(ProfileContainer)
