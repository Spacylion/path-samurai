import {
    ADD_POST, UPDATE_NEW_POST_TEXT, UPDATE_NEW_MESSAGE_BODY, SEND_MESSAGE
} from "../actions/actions"

let store = {
    _state: {
        dialogsPage: {
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
        },
        profilePage: {
            posts: [
                { id: 1, message: "Hii", likesCount: "1" },
                { id: 2, message: "Hii", likesCount: "222" },
                { id: 3, message: "Hii", likesCount: "3" },
                { id: 4, message: "Hii", likesCount: "555" },
            ],
            newPostText: 'sss'
        },
        friendsPage: {
            friends: [
                {
                    name: "Gesha",
                    image:
                        "https://images.unsplash.com/photo-1575936123452-b67c3203c357?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
                },
                {
                    name: "Duck",
                    image:
                        "https://images.unsplash.com/photo-1575936123452-b67c3203c357?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
                },
                {
                    name: "Bunnie",
                    image:
                        "https://images.unsplash.com/photo-1575936123452-b67c3203c357?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
                },
            ]
        },
    },
    _callSubscriber() {
        console.log('State changed');
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body
            this._callSubscriber(this._state)
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageBody
            this._state.dialogsPage.newMessageBody = ''
            this._state.dialogsPage.messages.push({ id: 6, message: body })
            this._callSubscriber(this._state)
        }
    }
}

export default store
window.store = store