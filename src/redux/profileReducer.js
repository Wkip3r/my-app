import {usersAPI} from "../api/api";

const ADD_POST = "ADD_POST"
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const TOGGLE_FETCHING = "TOGGLE_FETCHING"
const SET_USER_PROFILE = "SET_USER_PROFILE"

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
    newPostText: "text from state",
    isFetching: false
}


const profileReducer = (state = initialState,action) => {
    switch (action.type){
        case ADD_POST:
            return {
                ...state,
                postsData: [...state.postsData,{id: 5, message: state.newPostText, likesCount: 0}],
                newPostText: ""
            }
            break;
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.text
            }
            break;
        case TOGGLE_FETCHING:
            return {
                ...state,
                isFetching: !state.isFetching
            }
        case SET_USER_PROFILE:
            return  {...state, profile: action.profile}
    }
    return state

}

export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    profile: profile
})

export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    text: text
})

export const onToggleFetchingAC = (isFetching) => ({
    type: TOGGLE_FETCHING,
    isFetching: isFetching
})

export const setUserProfileThunk = (userId) => {
    return (dispatch) => {
        usersAPI.setUserProfile(userId).then(response => {
            dispatch(setUserProfile(response))
        })
    }
}

export default profileReducer