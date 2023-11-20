import {profileAPI, ResultCodesEnum} from '../../../shared/api/api';
import {ADD_POST, SET_USER_PROFILE, SET_STATUS, DELETE_POST, SAVE_PHOTO_SUCCESS} from "../actions/actions.js"
import {stopSubmit} from 'redux-form';
import {ContactsType, PhotosType, PostType} from "../../../shared/config/types/types";
import {AppStateType} from "./rootReducer";
import {Action, Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";

type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotosType
}
let initialState = {
    posts: [
        {id: 1, message: 'Hi,would like to hire me?', likesCount: 12},
        {id: 2, message: 'post', likesCount: 11},
        {id: 3, message: 'i know Redux very well!', likesCount: 112},
        {id: 4, message: 'like if you know Typescript too!', likesCount: 999}
    ] as Array<PostType>,
    profile: null as ProfileType | null,
    status: '',
    newPostText: ''

}
export type InitialStateType = typeof initialState

export const profileReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case ADD_POST: {
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
                posts: state.posts.filter(p => p.id !== action.postId)
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
        case SAVE_PHOTO_SUCCESS:
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            }
        default:
            return state
    }
}

// actions Creators
type ActionsTypes = AddPostActionCreatorType | SetUserProfileType |
    SetStatusType | DeletePostType | SavePhotoSuccessType
type AddPostActionCreatorType = {
    type: typeof ADD_POST,
    newPostText: string
}
export const addPostActionCreator = (newPostText: string): AddPostActionCreatorType =>
    ({type: ADD_POST, newPostText})

type SetUserProfileType = {
    type: typeof SET_USER_PROFILE
    profile: ProfileType
}
export const setUserProfile = (profile: ProfileType): SetUserProfileType => ({type: SET_USER_PROFILE, profile})

type SetStatusType = {
    type: typeof SET_STATUS
    status: string
}
export const setStatus = (status: string): SetStatusType =>
    ({type: SET_STATUS, status})

type DeletePostType = {
    type: typeof DELETE_POST
    postId: number
}
export const deletePost = (postId: number): DeletePostType =>
    ({type: DELETE_POST, postId})

type SavePhotoSuccessType = {
    type: typeof SAVE_PHOTO_SUCCESS
    photos: PhotosType
}
export const savePhotoSuccess = (photos: PhotosType): SavePhotoSuccessType =>
    ({type: SAVE_PHOTO_SUCCESS, photos})

// thunks Creators
type GetStateType = () => AppStateType
type DispatchType = Dispatch<ActionsTypes>
type ThunkTypes = ThunkAction<Promise<void>, AppStateType, undefined, ActionsTypes>
export const getUserProfile = (userId: number): ThunkTypes => async (dispatch) => {
    let response = await profileAPI
        .getProfile(userId)
    dispatch(setUserProfile(response))
}
export const getStatus = (userId: number): ThunkTypes => async (dispatch) => {
    let response = await profileAPI
        .getStatus(userId)
    dispatch(setStatus(response))
}
export const updateStatus = (status: string): ThunkTypes => async (dispatch) => {
    let response = await profileAPI
        .updateStatus(status)
    if (response.resultCode === 0) {
        dispatch(setStatus(status));
    }
}
export const savePhoto = (file: any): ThunkTypes => async (dispatch) => {
    let response = await profileAPI.savePhoto(file)
    if (response.resultCode === ResultCodesEnum.Success) {
        dispatch(savePhotoSuccess(response.photos))
    }
}
export const saveProfile = (profile: ProfileType): ThunkTypes => async (dispatch, getState: GetStateType) => {
    const userId = getState().auth.userId
    let response = await profileAPI.saveProfile(profile)
    if (response.resultCode === ResultCodesEnum.Success) {
        dispatch(getUserProfile(userId))
    } else {
        dispatch(stopSubmit("edit-profile", {_error: response.messages[0]}))
        return Promise.reject(response.messages[0])
    }
}

