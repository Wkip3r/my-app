import profileReducer, {addPostActionCreator, deletePostActionCreator} from "./profileReducer";

let state = {
    postsData:
        [
            {id: 1, message: "Hi, how are you?", likesCount: "20"},
            {id: 2, message: "It my first post", likesCount: "2"},
            {id: 3, message: "Apolo", likesCount: "1"},
            {id: 4, message: "GraphQL", likesCount: "34"},
            {id: 5, message: "Ant Design", likesCount: "45"},
        ],

}


test('length of post should be incremented', () => {
    let action = addPostActionCreator("Samurai")

    let newState = profileReducer(state,action)


    expect(newState.postsData.length).toBe(6)

});

test('message of new post should be corrected', () => {
    let action = addPostActionCreator("Samurai")

    let newState = profileReducer(state,action)

    expect(newState.postsData[newState.postsData.length - 1].message).toBe("Samurai")
});

test('after deleting length of messages should be decrement', () => {
    let action = deletePostActionCreator(2)

    let newState = profileReducer(state,action)

    expect(newState.postsData.length).toBe(state.postsData.length - 1)
});


