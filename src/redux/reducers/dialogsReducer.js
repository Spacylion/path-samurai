/* eslint-disable no-case-declarations */
import {
    UPDATE_NEW_MESSAGE_BODY, SEND_MESSAGE
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
    newMessageBody: ''
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY: {
            return {
                ...state,
                newMessageBody: action.body
            }
        }
        case SEND_MESSAGE: {
            let body = state.newMessageBody;
            return {
                ...state,
                stateCopy: '',
                messages: [...state.messages, { id: 8, message: body }]

            }
        }
        default:
            return state;
    }
}

// actionsCreators
export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })
export default dialogsReducer