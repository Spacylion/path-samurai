import { profileAPI } from '@/shared/api/api';
import {
    ADD_POST, SET_USER_PROFILE,
    SET_STATUS, DELETE_POST
} from "../actions/actions"

let initialState = {
    posts: [
        { id: 1, message: "Hii", likesCount: 1 },
        { id: 2, message: "Hii", likesCount: 222 },
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
                    id: 5, message: action.newPostText,
                    likesCount: 0
                };
                return {
                    ...state,
                    posts: [...state.posts, newPost],
                    newPostText: ''
                }
            }
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts
                    .filter(p => p.id != action.postId)
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
export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setStatus = (status) => ({ type: SET_STATUS, status })
export const deletePost = (postId) => ({ type: DELETE_POST, postId })

// thunks Creators
export const getUserProfile = (userId) => async (dispatch) => {
    let response = await profileAPI
        .getProfile(userId)
    dispatch(setUserProfile(response.data))
}
export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI
        .getStatus(userId)
    dispatch(setStatus(response.data))
}
export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI
        .updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}

export default profileReducer

