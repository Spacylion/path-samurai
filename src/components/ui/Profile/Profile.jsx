import "./Profile.css"

const Profile = () => {
  return (
    <div className='content'>
      <img
        className='content__image'
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREiKK0MLBSufP9ZTCHsZY-a_k-i_LZydymClGiUZj4&s'
        alt=''
      />
      <div className='content__profile'>
        <h1>Profile</h1>
        <h2>Description</h2>
      </div>
      <div className='content__item'>
        My posts
        <div className='content__new-posts'>New posts</div>
      </div>
      <div className='content__posts'>
        <div className='content__post'>1</div>
        <div className='content__post'>2</div>
        <div className='content__post'>3</div>
      </div>
    </div>
  )
}

export default Profile
