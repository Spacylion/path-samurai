/* eslint-disable no-case-declarations */
import {
    SET_USER_DATA, LOGIN, LOGOUT
} from "../actions/actions"
import { authAPI } from '@/shared/api/api'
import { stopSubmit } from 'redux-form'

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    // isFecthing: false,
    // password: null,
    // rememberMe: false,
    // captcha: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.payload,
            }
        }
        case LOGIN: {
            return {
                ...state,
                ...action.payload,
            }
        }
        case LOGOUT: {
            return {
                ...state,
                ...action.payload,
            }
        }

        default:
            return state;
    }
}

// actionsCreators
export default authReducer;
export const setAuthUserData = (userId, email, login, isAuth) =>
    ({ type: SET_USER_DATA, payload: { userId, email, login, isAuth } })
export const setLoginUserData = (email, password) =>
    ({ type: LOGIN, payload: { email, password } })
export const delLoginUserData = (email, password) =>
    ({ type: LOGOUT, payload: { email, password } })

// thunks creators
export const getAuthUserData = () => async (dispatch) => {
    let response = await authAPI
        .getAuthMe()
    if (response.data.resultCode === 0) {
        let { id, login, email } = response.data.data
        dispatch(setAuthUserData(id, email, login, true))
    }
}
export const login = (email, password, rememberMe) => async (dispatch) => {
    let response = await authAPI
        .login(email, password, rememberMe)
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
        dispatch(stopSubmit("login", { _error: message }))
    }
}
export const logout = () => async (dispatch) => {
    let response = await authAPI
        .logout()
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData(null, null, null, false))
    }
}
