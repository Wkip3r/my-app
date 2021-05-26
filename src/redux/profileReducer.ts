import {profileAPI, usersAPI} from "../api/api";
import {
    ADD_POST, AddPostActionCreator, DELETE_POST, DeletePostActionCreator, EDIT_STATUS, EditStatus,
    ProfileInfo,
    ProfileReducerInitialState, SET_STATUS, SET_USER_PROFILE, SetStatusType, SetUserProfileType,
    TOGGLE_FETCHING
} from "../ReducerTypes/ProfileReducerTypes";


let initialState: ProfileReducerInitialState = {
    postsData:
        [
            {id: 1, message: "Hi, how are you?", likesCount: 20},
            {id: 2, message: "It my first post", likesCount: 2},
            {id: 3, message: "Apolo", likesCount: 1},
            {id: 4, message: "GraphQL", likesCount: 34},
            {id: 5, message: "Ant Design", likesCount: 45},
        ],
    profile: null,
    isFetching: false,
    isEditStatus: false,
    status: 'Edit Status'
}


const profileReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ADD_POST:
            return (
                {
                    ...state,
                    postsData:
                        [
                            ...state.postsData,
                            {
                                id: ++state.postsData[state.postsData.length - 1].id,
                                message: action.text,
                                likesCount: 0
                            }
                        ]
                })
        case TOGGLE_FETCHING:
            return {
                ...state,
                isFetching: !state.isFetching
            }
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        case EDIT_STATUS:
            return {...state, isEditStatus: !state.isEditStatus}
        case SET_STATUS:
            return {...state, status: action.status}
        case DELETE_POST:
            return {
                ...state,
                postsData: state.postsData.filter(post => post.id !== action.id)
            }
    }
    return state
}

export const setUserProfile = (profile: ProfileInfo) => ({
    type: SET_USER_PROFILE,
    profile: profile
})

export const setStatus = (status: string) => ({
    type: SET_STATUS,
    status: status
})

export const getStatus = (userId: number) => async (dispatch: any) => {
    let response = await profileAPI.getStatus(userId)

    dispatch(setStatus(response.data))
}

export const addPostActionCreator = (postText: string) => ({
    type: ADD_POST,
    text: postText
})

export const deletePostActionCreator = (postId: number) => ({
    type: DELETE_POST,
    id: postId
})

export const editStatus = (isEdit: boolean) => ({
    type: EDIT_STATUS,
    isEdit: isEdit
})

export const updateStatus = (status:string) => async (dispatch: any) => {
    try {
        let response = await profileAPI.updateStatus(status)

        dispatch(setStatus(status))
    } catch (error) {

    }
}

export const setProfile = (profileInfo: ProfileInfo) => async (dispatch: any) => {
    let response = await profileAPI.setProfile(profileInfo)

    if(response.data.resultCode === 0){
        setUserProfileThunk(profileInfo.userId)
    }
}

export const setUserProfileThunk = (userId: number) => async (dispatch: any) => {
    let response = await usersAPI.setUserProfile(userId)
    dispatch(setUserProfile(response))
}

export default profileReducer