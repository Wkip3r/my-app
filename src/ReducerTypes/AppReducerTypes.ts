export const INITIALIZED_SUCCESS = "SET_INITIALIZED"

export type AppReducerInitialStateType = {
    initialized: boolean
}

export type InitializedSuccessType = {
    type: typeof INITIALIZED_SUCCESS
}