import s from "./MyPosts.module.css"
import Post from "./Post/Post"
import PropTypes from "prop-types"
import PostReduxForm from "./PostForm"
import { memo } from "react"

const MyPosts = memo((props) => {
  let postsElements = props.posts.map((p, index) => (
    <Post key={index} message={p.message} likesCount={p.likesCount} />
  ))

  const onAddPost = (values) => {
    props.addPost(values.newPostText)
  }

  return (
    <div className={s.content}>
      <div className={s.content__item}>
        <h3>My posts</h3>

        <div className={s.content__new__profile}>
          <PostReduxForm onSubmit={onAddPost} />
        </div>
      </div>
      <div className={s.content__posts}>{postsElements}</div>
    </div>
  )
})

MyPosts.propTypes = {
  posts: PropTypes.array.isRequired,
  addPost: PropTypes.func.isRequired,
  newPostText: PropTypes.string.isRequired,
}

export default MyPosts
