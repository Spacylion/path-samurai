import {updateObjectInArray} from '../../../features/input-validators/object-helpers'
import {UserType} from "../../../shared/config/types/types";
import {
    FOLLOW_BUTTON,
    SET_CURRENT_PAGE,
    SET_TOTAL_USERS_COUNT,
    SET_USERS,
    TOGGLE_IS_FETCHING,
    TOGGLE_IS_FOLLOWING_PROGRESS,
    UNFOLLOW_BUTTON
} from "../actions/actions"
import {AppStateType, InferActionsTypes} from "./rootReducer";
import {Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";
import {usersAPI} from "../../../shared/api/users-api";

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
type ActionsTypes = InferActionsTypes<typeof actions>
export const actions = {
    followSuccess: (userId: number) => ({type: FOLLOW_BUTTON, userId} as const),
    unfollowSuccess: (userId: number) => ({type: UNFOLLOW_BUTTON, userId} as const),
    setUsers: (users: Array<UserType>) => ({type: SET_USERS, users} as const),
    setCurrentPage: (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage} as const),
    setTotalUsersCount: (totalUsersCount: number) => ({
        type: SET_TOTAL_USERS_COUNT,
        count: totalUsersCount
    } as const),
    toggleIsFetching: (isFetching: boolean): ToggleIsFetchingType => ({
        type: TOGGLE_IS_FETCHING,
        isFetching
    } as const),
    toggleFollowingProgress: (isFetching: boolean, userId: number) => ({
        type: TOGGLE_IS_FOLLOWING_PROGRESS,
        isFetching,
        userId
    } as const)
}
// thunks creators
type GetStateType = () => AppStateType
type DispatchType = Dispatch<ActionsTypes>
type ThunkTypes = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>
export const requestUsers = (page: number, pageSize: number): ThunkTypes => {
    return async (dispatch, getState) => {
        dispatch(actions.setCurrentPage(page))
        let data = await usersAPI.getUsers(page, pageSize)
        dispatch(actions.toggleIsFetching(false))
        dispatch(actions.setUsers(data.items))
        dispatch(actions.setTotalUsersCount(data.totalCount))
    }
}
const _followUnfollowFlow = async (dispatch: DispatchType,
                                   userId: number,
                                   apiMethod: any,
                                   actionCreator: (userId: number) => ActionsTypes) => {
    dispatch(actions.toggleFollowingProgress(true, userId))
    let response = await apiMethod(userId)

    if (response.resultCode == 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleFollowingProgress(false, userId));
}

export const follow = (userId: any): ThunkTypes => {
    return async (dispatch) => {
        _followUnfollowFlow(dispatch, userId,
            usersAPI.follow.bind(usersAPI), actions.followSuccess)
    }
}
export const unfollow = (userId: number): ThunkTypes => {
    return async (dispatch) => {
        _followUnfollowFlow(dispatch, userId,
            usersAPI.unfollow.bind(usersAPI), actions.unfollowSuccess)
    }
}
// export reducer
export default usersReducer