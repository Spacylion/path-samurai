/* eslint-disable no-fallthrough */
import {
    FOLLOW_BUTTON, UNFOLLOW_BUTTON, SET_USERS
} from "../actions/actions"

let initialState = {
    users: []
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
        default:
            return state
    }

}
// actionsCreators
export const followAC = (userId) => ({ type: FOLLOW_BUTTON, userId })
export const unfollowAC = (userId) => ({ type: UNFOLLOW_BUTTON, userId })
export const setUsersAC = (users) => ({ type: SET_USERS, users })


// export reducer
export default usersReducer