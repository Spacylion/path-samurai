import {usersAPI} from '../../../shared/api/api'
import {updateObjectInArray} from '../../../features/input-validators/object-helpers'
import {UserType} from "../../../shared/config/types/types";
import {
    FOLLOW_BUTTON, UNFOLLOW_BUTTON, SET_USERS,
    SET_CURRENT_PAGE, SET_TOTAL_USERS_COUNT, TOGGLE_IS_FETCHING,
    TOGGLE_IS_FOLLOWING_PROGRESS
} from "../actions/actions"
import {AppStateType} from "./rootReducer";
import {ActionTypes} from "redux-form";
import {Action, Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";
import {RootState} from "@reduxjs/toolkit/query";

let initialState = {
    users: [] as Array<UserType>,
    pageSize: 5,
    totalUsersCount: 0,
    page: 1,
    isFetching: true,
    followingInProgress: [] as Array<number>
}
export type InitialStateType = typeof initialState

const usersReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case FOLLOW_BUTTON: {
            const updatedUsers = updateObjectInArray(state.users, action.userId, 'id', {followed: true});
            return {
                ...state,
                users: updatedUsers,
            };
        }
        case UNFOLLOW_BUTTON: {
            const updatedUsers = updateObjectInArray(state.users, action.userId, 'id', {followed: false});
            return {
                ...state,
                users: updatedUsers,
            };
        }
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state, page: action.page
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state, totalUsersCount: action.count
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        default:
            return state
    }
}
// actionsCreators
type ActionsTypes = FollowSuccessType | UnfollowSuccessType | SetUsersType
    | SetCurrentPageType | SetTotalUsersCountType | ToggleIsFetchingType | ToggleFollowingProgressType

type FollowSuccessType = {
    type: typeof FOLLOW_BUTTON
    userId: number
}
export const followSuccess = (userId: number): FollowSuccessType => ({type: FOLLOW_BUTTON, userId})
type UnfollowSuccessType = {
    type: typeof UNFOLLOW_BUTTON
    userId: number
}
export const unfollowSuccess = (userId: number): UnfollowSuccessType => ({type: UNFOLLOW_BUTTON, userId})
type SetUsersType = {
    type: typeof SET_USERS
    users: Array<UserType>
}
export const setUsers = (users: Array<UserType>): SetUsersType => ({type: SET_USERS, users})
type SetCurrentPageType = {
    type: SET_CURRENT_PAGE
    page: number
}
export const setCurrentPage = (page: number): SetCurrentPageType => ({type: SET_CURRENT_PAGE, page})
type SetTotalUsersCountType = {
    type: typeof SET_TOTAL_USERS_COUNT
    count: number
}
export const setTotalUsersCount = (totalUsersCount: number): SetTotalUsersCountType => ({
    type: SET_TOTAL_USERS_COUNT,
    count: totalUsersCount
})
type ToggleIsFetchingType = {
    type: typeof TOGGLE_IS_FETCHING
    isFetching: boolean
}
export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingType => ({type: TOGGLE_IS_FETCHING, isFetching})
type ToggleFollowingProgressType = {
    type: typeof TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching: boolean
    userId: number
}
export const toggleFollowingProgress = (isFetching: boolean, userId: number): ToggleFollowingProgressType => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
})
// thunks creators
type GetStateType = () => AppStateType
type DispatchType = Dispatch<ActionsTypes>
type ThunkTypes = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>
export const requestUsers = (page: number, pageSize: number): ThunkTypes => {
    return async (dispatch, getState) => {
        dispatch(setCurrentPage(page))
        let data = await usersAPI.getUsers(page, pageSize)
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(data.items))
        dispatch(setTotalUsersCount(data.totalCount))
    }
}
const _followUnfollowFlow = async (dispatch: DispatchType,
                                   userId: number,
                                   apiMethod: any,
                                   actionCreator: (userId: number) => ActionsTypes) => {
    dispatch(toggleFollowingProgress(true, userId))
    let response = await apiMethod(userId)

    if (response.resultCode == 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleFollowingProgress(false, userId));
}

export const follow = (userId: any): ThunkTypes => {
    return async (dispatch) => {
        _followUnfollowFlow(dispatch, userId,
            usersAPI.follow.bind(usersAPI), followSuccess)
    }
}
export const unfollow = (userId: number): ThunkTypes => {
    return async (dispatch) => {
        _followUnfollowFlow(dispatch, userId,
            usersAPI.unfollow.bind(usersAPI), unfollowSuccess)
    }
}
// export reducer
export default usersReducer