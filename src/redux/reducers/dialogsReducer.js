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
    let stateCopy = {
        ...state,
    };

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY: {
            stateCopy.newMessageBody = action.body;
            return stateCopy;
        }

        case SEND_MESSAGE: {
            let body = state.newMessageBody;
            stateCopy.newMessageBody = '';
            stateCopy.messages.push({ id: 8, message: body });
            return stateCopy;
        }

        default:
            return stateCopy;
    }
}
// actionsCreators
export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })

export default dialogsReducer