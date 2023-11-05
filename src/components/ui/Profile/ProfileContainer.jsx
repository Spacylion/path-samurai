import { useEffect } from "react"
import { connect } from "react-redux"
import {
  getStatus,
  updateStatus,
  getUserProfile,
} from "../../../redux/reducers/profileReducer"
import { useParams } from "react-router-dom"
import Profile from "./Profile"
import { compose } from "redux"

const ProfileContainer = ({
  getUserProfile,
  getStatus,
  updateStatus,
  profile,
  status,
  isAuth,
}) => {
  const { userId } = useParams()

  useEffect(() => {
    const targetUserId = userId || 8
    getUserProfile(targetUserId)
    getStatus(targetUserId)
    updateStatus(targetUserId)
  }, [userId, getUserProfile, getStatus, updateStatus])

  return (
    <div>
      <Profile
        profile={profile}
        status={status} // Передаем статус в пропсах
        isAuth={isAuth}
        updateStatus={updateStatus}
      />
    </div>
  )
}

let mapStateToProps = (state) => ({
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
