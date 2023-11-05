import { profileAPI, usersAPI } from '../../api/api';
import {
    ADD_POST, UPDATE_NEW_POST_TEXT, SET_USER_PROFILE, SET_STATUS
} from "../actions/actions"

let initialState = {
    posts: [
        { id: 1, message: "Hii", likesCount: "1" },
        { id: 2, message: "Hii", likesCount: "222" },

    ],
    newPostText: 'sss',
    profile: null,
    status: ""
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
        case SET_STATUS:
            return {
                ...state,
                status: action.status,
            }
        default:
            return state
    }
}
// actions Creators
export const addPostActionCreator = () => ({ type: ADD_POST })
export const onPostChangeActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setStatus = (status) => ({ type: SET_STATUS, status })

// thunks Creators
export const getUserProfile = (userId) => (dispatch) => {
    profileAPI
        .getProfile(userId)
        .then((response) => {
            dispatch(setUserProfile(response.data))
        })
}
export const getStatus = (userId) => (dispatch) => {
    profileAPI
        .getStatus(userId)
        .then((response) => {
            dispatch(setStatus(response.data))
        })
}
export const updateStatus = (status) => (dispatch) => {
    profileAPI
        .updateStatus(status)
        .then((response) => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status)); // Обновить статус в редюсере сразу же
            }
        })
}

export default profileReducer

