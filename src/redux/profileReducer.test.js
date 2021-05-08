import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = "ADD_POST"
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const TOGGLE_FETCHING = "TOGGLE_FETCHING"
const SET_USER_PROFILE = "SET_USER_PROFILE"
const EDIT_STATUS = "EDIT_STATUS"
const SET_STATUS = "SET_STATUS"

let initialState = {
    postsData:
        [
            {id: 1, message: "Hi, how are you?", likesCount: "20"},
            {id: 2, message: "It my first post", likesCount: "2"},
            {id: 3, message: "Apolo", likesCount: "1"},
            {id: 4, message: "GraphQL", likesCount: "34"},
            {id: 5, message: "Ant Design", likesCount: "45"},
        ],
    profile: null,
    isFetching: false,
    isEditStatus: false,
    status: 'Edit Status'
}

const profileReducer = (state = initialState, action) => {
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
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.text
            }
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
    }
    return state
}

export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    profile: profile
})

export const setStatus = (status) => ({
    type: SET_STATUS,
    status: status
})

export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data))
        })
}

export const addPostActionCreator = (postText) => ({
    type: ADD_POST,
    text: postText
})

export const editStatus = (isEdit) => ({
    type: EDIT_STATUS,
    isEdit: isEdit
})

export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(response => {
        dispatch(setStatus(status))
    })
}

export const setUserProfileThunk = (userId) => {
    return (dispatch) => {
        usersAPI.setUserProfile(userId).then(response => {
            dispatch(setUserProfile(response))
        })
    }
}

export default profileReducer