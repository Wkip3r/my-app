import {
    ADD_MESSAGE,
    AddMessageType, DELETE_MESSAGE,
    DeleteMessageType,
    DialogsReducerInitialState
} from "../ReducerTypes/DialogsReducerTypes";

let initialState : DialogsReducerInitialState = {
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
        ],
    newMessageText: "hey hey"
}

const dialogsReducer = (state = initialState, action: any):DialogsReducerInitialState => {

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
        case DELETE_MESSAGE:
            return {
                ...state,
                messagesData: state.messagesData.filter(message => message.id !== action.id)
            }
    }
    return state
}

export const addMessage = (messageText : string): AddMessageType => ({
    type: ADD_MESSAGE,
    text: messageText
})

export const deleteMessage = (id: number): DeleteMessageType => ({
    type: DELETE_MESSAGE,
    id: id
})

export default dialogsReducer