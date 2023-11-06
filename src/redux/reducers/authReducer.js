/* eslint-disable no-case-declarations */
import {
    SET_USER_DATA, LOGIN, LOGOUT
} from "../actions/actions"
import { authAPI } from '../../api/api'

let initialState = {
    userId: 2,
    email: null,
    login: null,
    isFecthing: false,
    isAuth: false,
    password: null,
    rememderMe: false,
    captcha: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data,
                isAith: true
            }
        }
        case LOGIN: {
            return {
                ...state,
                ...action.data,
            }
        }
        case LOGOUT: {
            return {
                ...state,
                ...action.data,
            }
        }

        default:
            return state;
    }
}

// actionsCreators
export default authReducer
export const setAuthUserData = (userId, email, login) => ({ type: SET_USER_DATA, data: { userId, email, login } })
export const setLoginUserData = (email, password) => ({ type: LOGIN, data: { email, password } })
export const delLoginUserData = (email, password) => ({ type: LOGOUT, data: { email, password } })

// thunks creators
export const getAuthUserData = () => {
    return (dispatch) => {
        authAPI
            .getAuthMe()
            .then((response) => {
                if (response.data.resultCode === 0) {
                    let { id, login, email } = response.data.data
                    dispatch(setAuthUserData(id, email, login))
                }
            })
    }
}
export const getLoginUserData = () => {
    return (dispatch) => {
        authAPI
            .login()
            .then((response) => {
                if (response.data.resultCode === 0) {
                    let { email, password } = response.data.data
                    dispatch(setLoginUserData(email, password))
                }
            })
    }
}
export const delLoginData = () => {
    return (dispatch) => {
        authAPI
            .logout()
            .then((response) => {
                if (response.data.resultCode === 0) {
                    let { email, password } = response.data.data
                    dispatch(setLoginUserData(email, password))
                }
            })
    }
}