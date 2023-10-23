/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import s from "./MyPosts.module.css"
import Post from "./Post/Post"
import React from "react"
// action creators
import {
  addPostActionCreator,
  onPostChangeActionCreator,
} from "../../../../redux/actions/actions"

const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} />
  ))

  let newPostElement = React.createRef()

  let deletePost = () => {
    alert("bye bye")
  }

  let addPost = () => {
    props.dispatch(addPostActionCreator())
  }
  let onPostChange = () => {
    let text = newPostElement.current.value
    let action = onPostChangeActionCreator(text)
    props.dispatch(action)
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
          {/* <div>{props.newPostText}</div> */}
          <button onClick={addPost} className={`${s.content__button} ${s.add}`}>
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

export default MyPosts
