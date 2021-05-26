export const SET_USER_DATA = "SET_USER_DATA"
export const GET_CAPTCHA_URL = "GET_CAPTCHA_URL"

export type SetCaptchaUrlType  = {
    type: typeof GET_CAPTCHA_URL
    captchaUrl: string
}

export type SetAuthUserDataACType = {
    type: typeof SET_USER_DATA
    payload: {
        id: number | null
        email: string | null
        login: string | null
        isAuth: boolean | null
    }
}


export type AuthReducerInitialStateType = {
    id: null | number
    email: null | string
    login: null | string
    isFetching: null | boolean
    isAuth: null | boolean
    captchaUrl: null | string
}

export type FormDataType = {
    email: string | null
    password: string | null
    rememberMe: boolean | null
    captcha: string | null
}

export type LoginResponseType = {
    email: string,
    password: string,
    rememberMe: boolean,
    captcha: string
}