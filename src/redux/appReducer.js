import {setAuthUserDataThunk} from "./auth-reducer";

const INITIALIZED_SUCCESS = "SET_INITIALIZED"

let initialState = {
    initialized: false
}


const appReducer = (state= initialState, action) => {
    switch (action.type){
        case INITIALIZED_SUCCESS:
            return {
                ...state,
               initialized: true,
            }
    }
    return state
}

export const setInitializedSuccess = () => ({
    type:INITIALIZED_SUCCESS,
})

export const initializeApp = () => {
    return (dispatch) => {
        let promise = dispatch(setAuthUserDataThunk())


        Promise.all([promise])
            .then(() => {
                dispatch(setInitializedSuccess())
            })
    }
}

export default appReducer