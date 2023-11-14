import React from "react"
import { memo } from "react"
import s from "./MyPosts.module.css"
import Post from "./Post/Post"
import AddNewPostFormRedux from "./PostForm"

const MyPosts = memo((props) => {
  let postsElements = [...props.posts]
    .reverse()
    .map((p) => (
      <Post key={p.id} message={p.message} likeCount={p.likesCount} />
    ))

  const newPostElement = React.createRef()

  const onAddPost = (values) => {
    props.addPost(values.newPostText)
  }

  return (
    <div className={s.content}>
      <div className={s.content__item}>
        <h3>My posts</h3>
        <div className={s.content__new__profile}>
          <AddNewPostFormRedux onSubmit={onAddPost} />
        </div>
      </div>
      <div className={s.content__posts}>{postsElements}</div>
    </div>
  )
})
MyPosts.displayName = "MyPosts"

export default MyPosts
