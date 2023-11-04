import { useEffect } from "react"
import { connect } from "react-redux"
import { getUserProfile } from "../../../redux/reducers/profileReducer"
import { useParams } from "react-router-dom"

import Profile from "./Profile"
import { withAuthRedirect } from "../../../hoc/withAuthRedirect"
import { compose } from "redux"

const ProfileContainer = ({ getUserProfile, profile, isAuth }) => {
  const { userId } = useParams()

  useEffect(() => {
    const targetUserId = userId || 2
    getUserProfile(targetUserId)
  }, [userId, getUserProfile])

  return (
    <div>
      <Profile profile={profile} isAuth={isAuth} />
    </div>
  )
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
})

export default compose(
  connect(mapStateToProps, { getUserProfile }),
  withAuthRedirect
)(ProfileContainer)
