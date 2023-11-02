import React, { useEffect } from "react"
import Profile from "./Profile"
import axios from "axios"
import { connect } from "react-redux"
import { useParams } from "react-router-dom"
import { setUserProfile } from "../../../redux/reducers/profileReducer"

function ProfileContainer({ setUserProfile, profile }) {
  let { userId } = useParams()
  if (!userId) {
    userId = 2
  }
  useEffect(() => {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
      .then((response) => {
        console.log("Received data:", response.data) // Log the data to the console
        console.log("userId:", userId)
        setUserProfile(response.data)
      })
  }, [userId, setUserProfile])

  return (
    <div>
      <Profile profile={profile} />
    </div>
  )
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
})

export default connect(mapStateToProps, { setUserProfile })(ProfileContainer)
