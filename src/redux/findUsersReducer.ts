import {usersAPI} from "../api/api";
import {
    FindUserReducerTypesInitialState, onToggleFollowType,
    SET_CURRENT_PAGE,
    SET_TOTAL_USERS_COUNT,
    SET_USERS,
    TOGGLE_FOLLOW,
    TOGGLE_IS_FOLLOWING_PROGRESS
} from "../ReducerTypes/FindUserReducerTypes";
import {TOGGLE_FETCHING} from "../ReducerTypes/ProfileReducerTypes";

let initialState : FindUserReducerTypesInitialState = {
    users: [],
    pageSize: 20,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

const findUsersReducer = (state: FindUserReducerTypesInitialState = initialState, action: any) : FindUserReducerTypesInitialState => {
    switch (action.type) {
        case TOGGLE_FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id) {
                        return {...u, followed: !u.followed}
                    }
                    return u
                })
            }
            break
        case SET_USERS:
            return {...state, users: [...action.users]}
            break
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
            break
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalUserCount}
            break
        case TOGGLE_FETCHING:
            return {...state, isFetching: action.isFetching}
            break
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.followingInProgress ? [...state.followingInProgress, action.userId] : state.followingInProgress.filter(id => id !== action.userId)
            }
            break
    }
    return state
}


export const onToggleFollow = (id : number): onToggleFollowType => ({
    type: TOGGLE_FOLLOW,
    id: id
})

export const setUsersActionCreator = (users : Array<any>) => ({
    type: SET_USERS,
    users: users
})

export const setCurrentPageActionCreator = (currentPage : number) => ({
    type: SET_CURRENT_PAGE,
    currentPage: currentPage
})

export const setTotalUserCount = (totalUserCount : number) => ({
    type: SET_TOTAL_USERS_COUNT,
    totalUserCount: totalUserCount
})

export const fetching = (isFetching : boolean) => ({
    type: TOGGLE_FETCHING,
    isFetching: isFetching
})

export const toggleIsFollowingProgress = (followingInProgress : boolean, userId : number) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    followingInProgress: followingInProgress,
    userId: userId
})

export const getUsers = (currentPage : number, pageSize : number) => async (dispatch : any) => {
    dispatch(fetching(true))
    let data = await usersAPI.getUsers(currentPage, pageSize)

    dispatch(setCurrentPageActionCreator(currentPage))
    dispatch(fetching(false))
    dispatch(setUsersActionCreator(data.items))
    dispatch(setTotalUserCount(data.totalCount))
}

export const follow = (userId : number) => async (dispatch : any) => {
    dispatch(toggleIsFollowingProgress(true, userId))
    let response = await usersAPI.followUser(userId)

    dispatch(toggleIsFollowingProgress(false, userId))
    dispatch(onToggleFollow(userId))
}

export const unfollow = (userId : number) => async (dispatch : any) => {
    dispatch(toggleIsFollowingProgress(true, userId))
    let response = usersAPI.unFollowUser(userId)

    dispatch(toggleIsFollowingProgress(false, userId))
    dispatch(onToggleFollow(userId))
}

export default findUsersReducer