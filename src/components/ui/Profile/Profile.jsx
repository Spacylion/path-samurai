import MyPosts from "./MyPosts/MyPosts"
import s from "./Profile.module.css"

const Profile = () => {
  return (
    <div>
      <img
        className={s.content__image}
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREiKK0MLBSufP9ZTCHsZY-a_k-i_LZydymClGiUZj4&s'
        alt=''
      />
      <div className={s.content__profile}>
        <h1>Profile</h1>
        <h2>Description</h2>
      </div>
      <MyPosts />
    </div>
  )
}

export default Profile
