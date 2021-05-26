import {setAuthUserDataThunk} from "./auth-reducer";
import {AppReducerInitialStateType, INITIALIZED_SUCCESS, InitializedSuccessType} from "../ReducerTypes/AppReducerTypes";

let initialState: AppReducerInitialStateType = {
    initialized: false
}

const appReducer = (state: AppReducerInitialStateType = initialState, action: any): AppReducerInitialStateType => {
    switch (action.type){
        case INITIALIZED_SUCCESS:
            return {
                ...state,
               initialized: true,
            }
    }
    return state
}

export const setInitializedSuccess = (): InitializedSuccessType => ({
    type:INITIALIZED_SUCCESS
})

export const initializeApp = () => {
    return (dispatch:any) => {
        let promise = dispatch(setAuthUserDataThunk())


        Promise.all([promise])
            .then(() => {
                dispatch(setInitializedSuccess())
            })
    }
}

export default appReducer