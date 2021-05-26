export const ADD_POST = "ADD_POST"
export const TOGGLE_FETCHING = "TOGGLE_FETCHING"
export const SET_USER_PROFILE = "SET_USER_PROFILE"
export const EDIT_STATUS = "EDIT_STATUS"
export const SET_STATUS = "SET_STATUS"
export const DELETE_POST = "DELETE_POST"
export const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS"

export type SetUserProfileType = {
    type: typeof SET_USER_PROFILE
    profile: ProfileInfo
}

export type SetStatusType = {
    type: typeof SET_STATUS
    status: string
}

export type AddPostActionCreator = {
    type: typeof ADD_POST
    text: string
}

export type DeletePostActionCreator = {
    type: typeof DELETE_POST
    id: number
}

export type EditStatus = {
    type: typeof EDIT_STATUS
    isEdit: boolean
}

export type Post = {
    id: number
    message: string
    likesCount: number
}

export type ProfileReducerInitialState = {
    postsData: Array<Post>
    profile: null | Object
    isFetching: boolean
    isEditStatus: boolean
    status: null | string
}

export type ProfileInfo = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }
}

export type PhotoType = {
    lastModified: number
    lastModifiedDate: Date
    name: string
    size: number
    type: string
    webkitRelativePath: string | null
}



