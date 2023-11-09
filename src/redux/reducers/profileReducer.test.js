import profileReducer, { addPostActionCreator } from './profileReducer';
// const { profileReducer, deletePost } = require('./profileReducer')
// const { addPostActionCreator } = require('./profileReducer')
let state = {
    posts: [
        { id: 1, message: "Hii", likesCount: "1" },
        { id: 2, message: "Hii", likesCount: "222" },
    ],
};
test('length of posts should be incremented', () => {
    // 1. исходные данные. Start Data
    let action = addPostActionCreator('test text of new post')
    // 2. action
    let newState = profileReducer(state, action)
    // 3. expectation
    expect(newState.posts.length).toBe(3)
    expect(newState.posts[2].message).toBe('Hii')
})
test('text should be correct', () => {
    // 1. исходные данные. Start Data
    let action = addPostActionCreator('test text of new post')
    // 2. action
    let newState = profileReducer(state, action)
    // 3. expectation
    expect(newState.posts[2].message).toBe('Hii')
})

test('after deleting length of messages should decrement', () => {
    // 1. исходные данные. Start Data
    let action = deletePost(1)
    // 2. action
    let newState = profileReducer(state, action)
    // 3. expectation
    expect(newState.posts.length).toBe(2)
})

