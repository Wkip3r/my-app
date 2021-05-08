const ADD_MESSAGE = "ADD_MESSAGE"
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT'


let initialState = {
    dialogsData:
        [
            {id: 1, name: "Dmitriy"},
            {id: 2, name: "Oleg"},
            {id: 3, name: "Andrei"},
            {id: 4, name: "Ivan"},
            {id: 5, name: "Sasha"},

        ],
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
    newMessageText: "hey hey"
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messagesData:
                    [
                        ...state.messagesData,
                        {
                            id: 6,
                            isUser: true,
                            message: action.text,
                            avatarLink: "https://avatars.mds.yandex.net/get-ott/374297/2a000001616b87458162c9216ccd5144e94d/678x380"
                        }
                    ],
                newMessageText: ""
            }

            break;
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.text
            }
            break;
    }
    return state
}

export const addMessage = (messageText) => ({
    type: ADD_MESSAGE,
    text: messageText
})

export default dialogsReducer