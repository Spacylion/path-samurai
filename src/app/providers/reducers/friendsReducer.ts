let initialState = {}
export type FriendsType = typeof initialState

const friendsReducer = (state = initialState, action: any): FriendsType => {
    switch (action.type) {
        default:
            return state
    }
}

export default friendsReducer