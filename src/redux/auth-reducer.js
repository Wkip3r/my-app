import {usersAPI} from "../api/api";

const SET_USER_DATA = "SET_USER_DATA"

let initialState = {
    id: null,
    email: null,
    login:null,
    isFetching: false,
    isAuth: false
}


const authReducer = (state= initialState, action) => {
    switch (action.type){
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
    }
    return state
}

export const setAuthUserDataAC = (id,email,login) => ({
    type:SET_USER_DATA,
    data: {id, email, login}
})

export const setAuthUserDataThunk = () => {
    return (dispatch) => {
        usersAPI.setAuthUser().then(response => {
            if(response.data.resultCode === 0){
                let {id, login, email} = response.data.data
                dispatch(setAuthUserDataAC(id,email,login))
            }
        })
    }
}

export default authReducer