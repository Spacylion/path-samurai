/* eslint-disable no-case-declarations */
import {
    SET_USER_DATA
} from "../actions/actions"
import { authAPI } from '../../api/api'

let initialState = {

    userId: 2,
    email: null,
    login: null,
    isFecthing: false,
    isAuth: false
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

        default:
            return state;
    }
}

// actionsCreators
export const setAuthUserData = (userId, email, login) => ({ type: SET_USER_DATA, data: { userId, email, login } })
export default authReducer

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