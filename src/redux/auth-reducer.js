import {authAPI, usersAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = "SET_USER_DATA"

let initialState = {
    id: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false
}


const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }
    }
    return state
}

export const setAuthUserDataAC = (id, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: {id, email, login, isAuth}
})

export const setAuthUserDataThunk = () => async (dispatch) => {
    let response = await usersAPI.setAuthUser()

    if (response.data.resultCode === 0) {
        let {id, login, email} = response.data.data
        dispatch(setAuthUserDataAC(id, email, login, true))
    }
}


export const login = (formData) => async (dispatch) => {
    let response = await authAPI.login(formData)

    if (response.data.resultCode === 0) {
        dispatch(setAuthUserDataThunk())
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some Error"
        dispatch(stopSubmit('login', {_error: message}))
    }
}

export const logout = () => async (dispatch) => {
    let response = await authAPI.logout()

    if (response.data.resultCode === 0) {
        dispatch(setAuthUserDataAC(null, null, null, false))
    }
}
export default authReducer