import {SEND_MESSAGE} from "../actions/actions.js"

type MessageType = {
    id: number
    message: string
}
type DialogType = {
    id: number
    name: string
}
let initialState = {
    dialogs: [
        {id: 1, name: "German"},
        {id: 2, name: "Caroline"},
        {id: 3, name: "Annie"},
        {id: 4, name: "Pepega"},
        {id: 5, name: "Petron"},
        {id: 6, name: "Spacy"},
        {id: 7, name: "FronkyFrog"},
    ] as Array<DialogType>,
    messages: [
        {id: 1, message: "some sender 1",},
        {id: 2, message: "some sender 2",},
        {id: 3, message: "some sender 3",},
        {id: 4, message: "some sender 4",},
    ] as Array<MessageType>,
}

export type InitialStateType = typeof initialState
const dialogsReducer = (state = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case SEND_MESSAGE: {
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 8, message: body}]
            }
        }
        default:
            return state;
    }
}
// actionsCreators
type ActionTypes = SendMessageCreatorActionType
type SendMessageCreatorActionType = {
    type: typeof SEND_MESSAGE
    newMessageBody: string
}
export const sendMessageCreator = (newMessageBody: string): SendMessageCreatorActionType => (
    {type: SEND_MESSAGE, newMessageBody})
export default dialogsReducer

// thunks