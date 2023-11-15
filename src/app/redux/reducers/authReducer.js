import {
    SET_USER_DATA, GET_CAPTCHA_URL_SUCCESS
} from "../actions/actions"
import { authAPI, securityAPI } from '@/shared/api/api'
import { stopSubmit } from 'redux-form'

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null,
    // isFecthing: false,
    // password: null,
    // rememberMe: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS: {
            {
                return {
                    ...state,
                    ...action.payload,
                }
            }
        }
        default:
            return state;
    }
}

// actionsCreators
export default authReducer;

export const setAuthUserData = (userId, email, login, isAuth) =>
({
    type: SET_USER_DATA,
    payload: { userId, email, login, isAuth }
})
export const getCaptchaUrlSuccess = (captchaUrl) =>
({
    type: GET_CAPTCHA_URL_SUCCESS,
    payload: { captchaUrl }
})

// thunks creators
export const getAuthUserData = () => async (dispatch) => {
    let response = await authAPI
        .me()
    if (response.data.resultCode === 0) {
        let { id, login, email } = response.data.data
        dispatch(setAuthUserData(id, email, login, true))
    }
}
export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
    let response = await authAPI
        .login(email, password, rememberMe, captcha)
    if (response.data.resultCode === 0) {
        // success, get auth data
        dispatch(getAuthUserData())
    } else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptchaUrl())
        }
        let message = response.data.messages.length > 0
            ? response.data.messages[0]
            : 'Some error'
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

export const getCapthaUrl = () => async (dispatch) => {
    let response = await securityAPI
        .getCaptchaUrl()
    const captchaUrl = response.data.url
    dispatch(getCaptchaUrlSuccess(captchaUrl))
}