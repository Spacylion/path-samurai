import { usersAPI } from '../../api/api'
import { updateObjectInArray } from '../../utils/validators/object-helpers'
import {
    FOLLOW_BUTTON, UNFOLLOW_BUTTON, SET_USERS,
    SET_CURRENT_PAGE, SET_TOTAL_USERS_COUNT, TOGGLE_IS_FETCHING,
    TOGGLE_IS_FOLLOWING_PROGRESS
} from "../actions/actions"
let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    page: 1,
    isFetching: false,
    followingInProgress: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW_BUTTON: {
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', { followed: true })
                // state.users.map(u => {
                //     if (u.id === action.userId) {
                //         return { ...u, followed: true }
                //     }
                //     return u
                // })
            }
        }
        case UNFOLLOW_BUTTON: {
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', { followed: false })
                // users: state.users.map(u => {
                //     if (u.id === action.userId) {
                //         return { ...u, followed: false }
                //     }
                //     return u
                // })
            }
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
export const followSuccess = (userId) => ({ type: FOLLOW_BUTTON, userId })
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW_BUTTON, userId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (page) => ({ type: SET_CURRENT_PAGE, page: page })
export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount })
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const toggleFollowingProgress = (isFetching, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId })

// thunks creators
export const getUsers = (page, pageSize) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        let data = await usersAPI
            .getUsers(page, pageSize)
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(data.items))
        dispatch(setTotalUsersCount(data.totalCount))
    }
}
const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleFollowingProgress(true, userId))
    let response = await apiMethod(userId)
    if (response.data.resultCode == 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleFollowingProgress(false, userId));
}
export const follow = (userId) => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch, userId,
            usersAPI.follow.bind(usersAPI), followSuccess)
    }
}
export const unfollow = (userId) => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch, userId,
            usersAPI.unfollow.bind(usersAPI), unfollowSuccess)
    }
}
// export reducer
export default usersReducer