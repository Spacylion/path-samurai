/* eslint-disable no-case-declarations */
import {
    ADD_POST, UPDATE_NEW_POST_TEXT
} from "../actions/actions"

let initialState = {
    posts: [
        { id: 1, message: "Hii", likesCount: "1" },
        { id: 2, message: "Hii", likesCount: "222" },
        { id: 3, message: "Hii", likesCount: "3" },
        { id: 4, message: "Hii", likesCount: "555" },
    ],
    newPostText: 'sss'
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            state.posts.push(newPost)
            state.newPostText = ''
            return state;

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;


        default:
            return state
    }
}

export const addPostActionCreator = () =>
({
    type: ADD_POST
})
export const onPostChangeActionCreator = (text) =>
({
    type: UPDATE_NEW_POST_TEXT, newText: text
})


export default profileReducer