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
export default authReducer
export const setAuthUserData = (userId, email, login, isAuth) =>
    ({ type: SET_USER_DATA, payload: { userId, email, login, isAuth } })
export const setLoginUserData = (email, password) =>
    ({ type: LOGIN, payload: { email, password } })
export const delLoginUserData = (email, password) =>
    ({ type: LOGOUT, payload: { email, password } })

// thunks creators
export const getAuthUserData = () => {
    return (dispatch) => {
        authAPI
            .getAuthMe()
            .then((response) => {
                if (response.data.resultCode === 0) {
                    let { id, login, email } = response.data.data
                    dispatch(setAuthUserData(id, email, login, true))
                }
            })
    }
}
export const login = (email, password, rememberMe) => {
    return (dispatch) => {
        authAPI
            .login(email, password, rememberMe)
            .then((response) => {
                if (response.data.resultCode === 0) {
                    dispatch(getAuthUserData())
                }
            })
    }
}
export const logout = () => {
    return (dispatch) => {
        authAPI
            .logout()
            .then((response) => {
                if (response.data.resultCode === 0) {
                    dispatch(getAuthUserData(null, null, null, false))
                }
            })
    }
}
