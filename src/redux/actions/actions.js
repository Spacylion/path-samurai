// dupe
export const ADD_POST = 'ADD_POST'
export const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
export const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
export const SEND_MESSAGE = 'SEND_MESSAGE'

// actionsCreators
export const addPostActionCreator = () =>
({
    type: ADD_POST
})
export const onPostChangeActionCreator = (text) =>
({
    type: UPDATE_NEW_POST_TEXT, newText: text
})
export const sendMessageCreator = () =>
({
    type: SEND_MESSAGE
})
export const updateNewMessageBodyCreator = (body) =>
({
    type: UPDATE_NEW_MESSAGE_BODY, body: body
})

