import s from "./MyPosts.module.css"
import Post from "./Post/Post"

const MyPosts = () => {
  return (
    <div>
      <div className={s.content__item}>
        My posts
        <div className={s.content__new__profile}>
          <textarea
            className={s.content__text__area}
            name=''
            id=''
            cols='30'
            rows='5'
          ></textarea>
          <button className={`${s.content__button} ${s.add}`}>Add post</button>
          <button className={`${s.content__button} ${s.remove}`}>
            Remove post
          </button>
        </div>
      </div>
      <div className={s.content__posts}>
        <Post message='Hi' />
        <Post message='Its second post' likesCount='0' />
        <Post message='3d post' likesCount='11' />
        <Post message='4th post' likesCount='111' />
      </div>
    </div>
  )
}

export default MyPosts
