import { connect } from "react-redux"
import { addPostActionCreator } from "@/app/redux/reducers/profileReducer"
import MyPosts from "./MyPosts"

const mapAddPost = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  }
}

let mapOnPostChange = (dispatch) => {
  return {
    addPost: (newPostText) => {
      dispatch(addPostActionCreator(newPostText))
    },
  }
}

const MyPostsContainer = connect(mapAddPost, mapOnPostChange)(MyPosts)

export default MyPostsContainer
