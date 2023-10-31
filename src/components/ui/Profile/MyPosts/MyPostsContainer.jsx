import { connect } from "react-redux"
import {
  addPostActionCreator,
  onPostChangeActionCreator,
} from "../../../../redux/reducers/profileReducer"
import MyPosts from "./MyPosts"

const mapAddPost = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  }
}

let mapOnPostChange = (dispatch) => {
  return {
    updateNewPostText: (text) => {
      let action = onPostChangeActionCreator(text)
      dispatch(action)
    },
    addPost: () => {
      dispatch(addPostActionCreator())
    },
  }
  
}

const MyPostsContainer = connect(mapAddPost, mapOnPostChange)(MyPosts)

export default MyPostsContainer
