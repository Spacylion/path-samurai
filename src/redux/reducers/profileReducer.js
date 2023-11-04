import { usersAPI } from '../../api/api';
import {
    ADD_POST, UPDATE_NEW_POST_TEXT, SET_USER_PROFILE
} from "../actions/actions"

let initialState = {
    posts: [
        { id: 1, message: "Hii", likesCount: "1" },
        { id: 2, message: "Hii", likesCount: "222" },

    ],
    newPostText: 'sss',
    profile: null
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            {
                let newPost = {
                    id: 5,
                    message: state.newPostText,
                    likesCount: 0
                };
                return {
                    ...state,
                    posts: [...state.posts, newPost],
                    newPostText: ''
                }
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        default:
            return state
    }
}
// actions Creators
export const addPostActionCreator = () => ({ type: ADD_POST })
export const onPostChangeActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })

// thunks Creators
export const getUserProfile = (userId) => (dispatch) => {
    usersAPI
        .getProfile(userId)
        .then((response) => {
            dispatch(setUserProfile(response.data))
        })
}



export default profileReducer

