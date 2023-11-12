import Preloader from "../../../features/Preloader/Preloader"
import s from "./ProfileInfo.module.css"
import ProfileStatusWithHooks from "./ProfileStatusWithHooks"

const ProfileInfo = ({ profile, status, updateStatus }) => {
  if (!profile) {
    return <Preloader />
  }

  return (
    <div>
      <div className={s.content__profile}>
        <img src={profile.photos?.large || "default-image-url"} alt='' />
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
      </div>
    </div>
  )
}

export default ProfileInfo
