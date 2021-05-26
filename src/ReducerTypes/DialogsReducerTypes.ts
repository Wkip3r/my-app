export const ADD_MESSAGE = "ADD_MESSAGE"
export const DELETE_MESSAGE = "DELETE_MESSAGE"

export type AddMessageType = {
    type: typeof ADD_MESSAGE
    text: string
}

export type DeleteMessageType = {
    type: typeof DELETE_MESSAGE
    id: number
}



type Dialog = {
    id: number
    name: string
}

type Message = {
    id: number
    isUser: boolean
    message: string
    avatarLink: string
}


export type DialogsReducerInitialState = {
    dialogsData: Array<Dialog>
    messagesData: Array<Message>
    newMessageText: string
}