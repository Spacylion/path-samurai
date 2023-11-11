import profileReducer, { addPostActionCreator, deletePost } from './profileReducer';

let state = {
    posts: [
        { id: 1, message: "Hii", likesCount: "1" },
        { id: 2, message: "Hii", likesCount: "222" },
    ],
};

test('length of posts should be incremented', () => {
    let action = addPostActionCreator('test text of new post');
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(3);
    expect(newState.posts[2].message).toBe('test text of new post');
});

test('text should be correct', () => {
    let action = addPostActionCreator('test text of new post');
    let newState = profileReducer(state, action);
    expect(newState.posts[2].message).toBe('test text of new post');
});

test('after deleting length of messages should remain the same', () => {
    let action = deletePost(1); // Assuming 1 is a valid postId for your test
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(1); // Adjust the expected value accordingly
});

