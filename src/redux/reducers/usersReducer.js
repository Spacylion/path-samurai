/* eslint-disable no-fallthrough */
import {
    FOLLOW_BUTTON, UNFOLLOW_BUTTON, SET_USERS, SET_CURRENT_PAGE
} from "../actions/actions"

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 19,
    currentPage: 3
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW_BUTTON:
            {
                return {
                    ...state,
                    users: state.users.map(u => {
                        if (u.id === action.userId) {
                            return { ...u, followed: true }
                        }
                        return u
                    })
                }
            }

        case UNFOLLOW_BUTTON:
            {
                return {
                    ...state,
                    users: state.users.map(u => {
                        if (u.id === action.userId) {
                            return { ...u, followed: false }
                        }
                        return u
                    })
                }
            }


        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            }

        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage
            }
        default:
            return state
    }

}
// actionsCreators
export const followAC = (userId) => ({ type: FOLLOW_BUTTON, userId })
export const unfollowAC = (userId) => ({ type: UNFOLLOW_BUTTON, userId })
export const setUsersAC = (users) => ({ type: SET_USERS, users })
export const setCurrentPageAC = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage: currentPage })


// export reducer
export default usersReducer