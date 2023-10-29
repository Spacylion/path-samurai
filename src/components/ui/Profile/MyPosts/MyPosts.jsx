/* eslint-disable no-debugger */
import s from "./MyPosts.module.css"
import Post from "./Post/Post"
import React from "react"
import PropTypes from "prop-types" // Import PropTypes

const MyPosts = (props) => {
  let postsElements = props.posts.map((p, index) => (
    <Post key={index} message={p.message} likesCount={p.likesCount} />
  ))

  let newPostElement = React.createRef()

  let deletePost = () => {
    alert("bye bye")
  }

  let onAddPost = () => {
    props.addPost()
  }
  let onPostChange = () => {
    let text = newPostElement.current.value
    props.updateNewPostText(text)
  }
  return (
    <div className={s.content}>
      <div className={s.content__item}>
        <h3>My posts</h3>
        <div className={s.content__new__profile}>
          <textarea
            className={s.content__text__area}
            ref={newPostElement}
            onChange={onPostChange}
            value={props.newPostText}
          ></textarea>
          <button
            onClick={onAddPost}
            className={`${s.content__button} ${s.add}`}
          >
            Add post
          </button>
          <button
            onClick={deletePost}
            className={`${s.content__button} ${s.remove}`}
          >
            Remove post
          </button>
        </div>
      </div>
      <div className={s.content__posts}>{postsElements}</div>
    </div>
  )
}

MyPosts.propTypes = {
  posts: PropTypes.array.isRequired,
  addPost: PropTypes.func.isRequired,
  updateNewPostText: PropTypes.func.isRequired,
  newPostText: PropTypes.string.isRequired,
}

export default MyPosts
