import {
    SET_INITIALIZED
} from "../actions/actions"
import { getAuthUserData } from './authReducer'
let initialState = {
    initialized: false,
}
const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED: {
            return {
                ...state,
                initialized: true,
            }
        }
        default:
            return state;
    }
}

// actionsCreators
export default appReducer
export const initializionSuccess = () => ({ type: SET_INITIALIZED })

// thunks creators
export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData())
    // dispatch(sometingElse())
    Promise.all([promise])
        .then(() => {
            dispatch(initializionSuccess())
        })

}
