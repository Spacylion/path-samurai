import Preloader from "../../../../Features/Preloader/Preloader"
import s from "./ProfileInfo.module.css"
import ProfileStatusWithHooks from "./ProfileStatusWithHooks"

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }

  return (
    <div>
      <div className={s.content__profile}>
        <img src={props.profile.photos?.large || "default-image-url"} alt='' />
        <ProfileStatusWithHooks
          status={props.status}
          updateStatus={props.updateStatus}
        />
      </div>
    </div>
  )
}

export default ProfileInfo
