import React from "react"
import Preloader from "../../../features/Preloader/Preloader"
import s from "./ProfileInfo.module.css"

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }

  return (
    <div>
      <img
        className={s.content__image}
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREiKK0MLBSufP9ZTCHsZY-a_k-i_LZydymClGiUZj4&s'
        alt=''
      />

      <div className={s.content__profile}>
        <img src={props.profile.photos?.large || "default-image-url"} alt='' />
        <h1>{props.profile.fullName}</h1>
        <h2>{props.profile.aboutMe}</h2>
        <a>{props.profile.contacts?.facebook || "No Facebook"}</a>
      </div>
    </div>
  )
}

export default ProfileInfo
