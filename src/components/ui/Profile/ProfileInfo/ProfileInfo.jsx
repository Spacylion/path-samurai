import Preloader from "../../../../Features/Preloader/Preloader"
import s from "./ProfileInfo.module.css"
import ProfileStatus from "./ProfileStatus"

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }

  return (
    <div>
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
