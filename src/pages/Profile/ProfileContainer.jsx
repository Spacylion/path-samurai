import { useEffect } from "react"
import { connect } from "react-redux"
import {
  getStatus,
  updateStatus,
  getUserProfile,
  savePhoto,
  saveProfile,
} from "@/app/redux/reducers/profileReducer"
import Profile from "./Profile"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"

const ProfileContainer = ({
  profile,
  status,
  authorizedUserId,
  getUserProfile,
  getStatus,
  updateStatus,
  savePhoto,
  saveProfile,
}) => {
  const { userId } = useParams()
  const navigate = useNavigate()

  const refreshProfile = () => {
    let userIdParam = userId || authorizedUserId
    if (!userIdParam) {
      navigate("/login")
      return
    }
    getUserProfile(userIdParam)
    getStatus(userIdParam)
  }

  useEffect(() => {
    refreshProfile()
  }, [userId, authorizedUserId, getUserProfile, getStatus])

  return (
    <Profile
      isOwner={!userId}
      profile={profile}
      status={status}
      updateStatus={updateStatus}
      savePhoto={savePhoto}
      saveProfile={saveProfile}
    />
  )
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth,
})

export default connect(mapStateToProps, {
  getUserProfile,
  getStatus,
  updateStatus,
  savePhoto,
  saveProfile,
})(ProfileContainer)
