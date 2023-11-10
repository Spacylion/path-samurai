import { memo } from "react"
import PropTypes from "prop-types"
import s from "./MyPosts.module.css"
import Post from "./Post/Post"
import PostReduxForm from "./PostForm"

const MyPosts = memo(({ posts, addPost }) => {
  console.log(posts)
  const postsElements = posts.map((p) => (
    <Post key={String(p.id)} message={p.message} likesCount={p.likesCount} />
  ))

  const onAddPost = (values) => {
    addPost(values.newPostText)
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
MyPosts.displayName = "MyPosts"

MyPosts.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired,
      likesCount: PropTypes.number.isRequired, // Change this to number
    })
  ).isRequired,
  addPost: PropTypes.func.isRequired,
}

export default MyPosts
