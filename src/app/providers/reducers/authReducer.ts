import {GET_CAPTCHA_URL_SUCCESS, SET_USER_DATA} from "../actions/actions.js"
import {authAPI, ResultCodesEnum, ResultCodesForCaptcha, securityAPI} from "../../../shared/api/api"
import {stopSubmit} from "redux-form"
import {AppStateType} from "./rootReducer";
import {Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";

let initialState = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    captchaUrl: null as string | null,
}
export type InitialStateType = typeof initialState

export const authReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
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
            return state
    }
}
// actionsCreators
type ActionsTypes = SetAuthUserDataType | GetCaptchaUrlSuccessType
type SetAuthUserDataPayloadType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}
type SetAuthUserDataType = {
    type: typeof SET_USER_DATA,
    payload: SetAuthUserDataPayloadType
}
export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean): SetAuthUserDataType => ({
    type: typeof SET_USER_DATA,
    payload: {userId, email, login, isAuth},
})
type GetCaptchaUrlSuccessPayloadType = {
    captchaUrl: string
}
type GetCaptchaUrlSuccessType = {
    type: typeof GET_CAPTCHA_URL_SUCCESS,
    payload: GetCaptchaUrlSuccessPayloadType,
}
export const getCaptchaUrlSuccess = (captchaUrl: string): GetCaptchaUrlSuccessType => ({
    type: typeof GET_CAPTCHA_URL_SUCCESS,
    payload: {captchaUrl},
})

// thunks creators
type GetStateType = () => AppStateType
type DispatchType = Dispatch<ActionsTypes>
type TypeThunks = ThunkAction<void, AppStateType, undefined, ActionsTypes>
export const getAuthUserData = (): TypeThunks => async (dispatch) => {
    let meData = await authAPI.me()
    if (meData.resultCode === ResultCodesEnum.Success) {
        let {id, login, email} = meData.data
        dispatch(setAuthUserData(id, email, login, true))
    }
}
export const login = (email: string | null,
                      password: string | null,
                      rememberMe: boolean,
                      captcha: string | null): TypeThunks => async (dispatch) => {
    let loginData = await authAPI
        .login(email, password, rememberMe, captcha)
    if (loginData.resultCode === ResultCodesEnum.Success) {
        dispatch(getAuthUserData())
    } else {
        if (loginData.resultCode === ResultCodesForCaptcha.CaptchaIsRequired) {
            dispatch(getCaptchaUrl())
        }
        let message = loginData.messages.length > 0
            ? loginData.messages[0]
            : "Some error"
        dispatch(stopSubmit("login", {_error: message}))
    }
}
export const logout = (): TypeThunks => async (dispatch) => {
    let response = await authAPI.logout()
    if (response.resultCode === ResultCodesEnum.Success) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}
export const getCaptchaUrl = (): TypeThunks => async (dispatch) => {
    let response = await securityAPI.getCaptchaUrl()
    const captchaUrl = response.url
    dispatch(getCaptchaUrlSuccess(captchaUrl))
}
