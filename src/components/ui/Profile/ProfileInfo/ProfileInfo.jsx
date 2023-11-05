import Preloader from "../../../features/Preloader/Preloader"
import s from "./ProfileInfo.module.css"
import ProfileStatus from "./ProfileStatus"

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }

  return (
    <div>
      {/* <img
        className={s.content__image}
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREiKK0MLBSufP9ZTCHsZY-a_k-i_LZydymClGiUZj4&s'
        alt=''
      /> */}
      <div className={s.content__profile}>
        <img src={props.profile.photos?.large || "default-image-url"} alt='' />
        <ProfileStatus
          status={props.status}
          updateStatus={props.updateStatus}
        />
      </div>
    </div>
  )
}

export default ProfileInfo
