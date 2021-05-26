export const TOGGLE_FOLLOW = "TOGGLE_FOLLOW"
export const SET_USERS = "SET_USERS"
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
export const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"
export const TOGGLE_FETCHING = "TOGGLE_FETCHING"
export const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS"



export type User = {
    id: number
    name: string
    status: string
    photos: {
        small: string
        large: string
    }
    followed: boolean
}

export type FindUserReducerTypesInitialState = {
    users: Array <User>
    pageSize: number | null
    totalUsersCount: number | null
    currentPage: number | null
    isFetching: boolean | null
    followingInProgress: Array<any>
}

export type onToggleFollowType = {
    type: typeof TOGGLE_FOLLOW
    id: number
}

export type setUsersActionCreator = {
    type: typeof SET_USERS
    users: Array<User>
}

export type setCurrentPageActionCreator = {
    type: typeof SET_CURRENT_PAGE
    currentPage: number
}

export type setTotalUserCount = {
    type: typeof SET_TOTAL_USERS_COUNT
    totalUserCount: number
}

export type fetching = {
    type: typeof TOGGLE_FETCHING
    isFetching: boolean
}

export type toggleIsFollowingProgress = {
    type: typeof TOGGLE_IS_FOLLOWING_PROGRESS
    followingInProgress: boolean
    userId: number
}