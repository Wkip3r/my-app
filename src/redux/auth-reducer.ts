import {authAPI, securityAPI, usersAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {
    AuthReducerInitialStateType,
    FormDataType,
    GET_CAPTCHA_URL,
    SET_USER_DATA, SetAuthUserDataACType, SetCaptchaUrlType
} from "../ReducerTypes/Auth-reducerTypes";

let initialState: AuthReducerInitialStateType = {
    id: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false,
    captchaUrl: null
}


const authReducer = (state = initialState, action:any): AuthReducerInitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }
        case GET_CAPTCHA_URL :
            debugger
            return {
                ...state,
                captchaUrl: action.captchaUrl
            }
    }
    return state
}

export const setAuthUserDataAC = (id: number, email: string, login: string , isAuth: boolean ): SetAuthUserDataACType => ({
    type: SET_USER_DATA,
    payload: {id, email, login, isAuth}
})

export const setAuthUserDataThunk = () => async (dispatch:any) => {
    let response = await usersAPI.setAuthUser()

    if (response.data.resultCode === 0) {
        let {id, login, email} = response.data.data
        dispatch(setAuthUserDataAC(id, email, login, true))
    }
}

export const setCaptchaUrl = (captchaUrl: string): SetCaptchaUrlType => ({
    type:GET_CAPTCHA_URL,
    captchaUrl: captchaUrl
})


export const login = (formData : FormDataType) => async (dispatch: any) => {
    let response:any = await authAPI.login(formData)

    if (response.data.resultCode === 0) {
        dispatch(getCaptchaUrl())
        dispatch(setAuthUserDataThunk())
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some Error"
        dispatch(stopSubmit('login', {_error: message}))
    }
}

export const getCaptchaUrl = () => async (dispatch: any) => {
    let response = await securityAPI.getCaptchaUrl()
    const captchaUrl = response.data.url

    dispatch(setCaptchaUrl(captchaUrl))
}

export const logout = () => async (dispatch: any) => {
    let response = await authAPI.logout()

    if (response.data.resultCode === 0) {
        dispatch(setAuthUserDataAC(0, "", "", false))
    }
}
export default authReducer