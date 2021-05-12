import dialogsReducer, {deleteMessage} from "./dialogsReducer";

let state = {

    messagesData:
        [
            {
                id: 1,
                isUser: true,
                message: "Hi all",
                avatarLink: "https://avatars.mds.yandex.net/get-ott/374297/2a000001616b87458162c9216ccd5144e94d/678x380"
            },
            {
                id: 2,
                isUser: false,
                message: "Subscription",
                avatarLink: "https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"
            },
            {
                id: 3,
                isUser: true,
                message: "Apolo",
                avatarLink: "https://avatars.mds.yandex.net/get-ott/374297/2a000001616b87458162c9216ccd5144e94d/678x380"
            },
            {
                id: 4,
                isUser: false,
                message: "GraphQL",
                avatarLink: "https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"
            },
            {
                id: 5,
                isUser: true,
                message: "Ant Design",
                avatarLink: "https://avatars.mds.yandex.net/get-ott/374297/2a000001616b87458162c9216ccd5144e94d/678x380"
            },
        ],

}

test('after deleting message messageData should be decrement', () => {
    let action = deleteMessage(1)

    let newState = dialogsReducer(state,action)

    expect(newState.messagesData.length).toBe(state.messagesData.length - 1)
});