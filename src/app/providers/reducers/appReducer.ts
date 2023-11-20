import {GET_GLOBAL_ERROR, SET_INITIALIZED} from "../actions/actions"
import {getAuthUserData} from "./authReducer"
import {AppStateType} from "./rootReducer";
import {Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";

const initialState = {
    initialized: false,
    globalError: null
}
export type InitialStateType = typeof initialState

export const appReducer = (state = initialState, action: ActionsType)
    : InitialStateType => {
    switch (action.type) {
        case SET_INITIALIZED: {
            return {
                ...state,
                initialized: true,
            }
        }
        case GET_GLOBAL_ERROR: {
            return {
                ...state,
                globalError: action.error,
            }
        }
        default:
            return state
    }
}

// actionsCreators
type ActionsType = InitializedSuccessActionType | GetGlobalErrorType
export type InitializedSuccessActionType = {
    type: typeof SET_INITIALIZED,
}
export const initializationSuccess = (): InitializedSuccessActionType => ({
    type: SET_INITIALIZED,
})

export type GetGlobalErrorType = {
    type: typeof GET_GLOBAL_ERROR,
    error: string | null
}
export const getGlobalError = (error: string | null): GetGlobalErrorType => ({
    type: GET_GLOBAL_ERROR,
    error,
})

// thunks creators
type GetStateType = () => AppStateType
type DispatchType = Dispatch<ActionsType>
type ThunkTypes = ThunkAction<Promise<void>, AppStateType, unknown, ActionsType>
export const initializeApp = (): ThunkTypes => (dispatch) => {
    let promise = dispatch(getAuthUserData())
    return Promise.all([promise])
        .then(() => {
            dispatch(initializationSuccess())
        })
}

export const handleGlobalError = (eventReason: string): ThunkTypes => (dispatch) => {
    dispatch(getGlobalError(eventReason));
    return new Promise<void>((resolve) => {
        setTimeout(() => {
            dispatch(getGlobalError(null));
            resolve();
        }, 3000);
    });
};