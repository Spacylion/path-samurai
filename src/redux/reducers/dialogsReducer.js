/* eslint-disable no-case-declarations */
import {
    SEND_MESSAGE
} from "../actions/actions"

let initialState = {
    messages:
        [
            {
                id: 1,
                message: "some sender 1",
            },
            {
                id: 2,
                message: "some sender 2",
            },
            {
                id: 3,
                message: "some sender 3",
            },
            {
                id: 4,
                message: "some sender 4",
            },
        ],
    dialogs: [
        { id: 1, name: "German" },
        { id: 2, name: "Caroline" },
        { id: 3, name: "Annie" },
        { id: 4, name: "Pepega" },
        { id: 5, name: "Petron" },
        { id: 6, name: "Spacy" },
        { id: 7, name: "FronkyFrog" },
    ],
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, { id: 8, message: body }]
            }
        }
        default:
            return state;
    }
}

// actionsCreators
export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody })
export default dialogsReducer

// thunks