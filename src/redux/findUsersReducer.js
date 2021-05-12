import {usersAPI} from "../api/api";

const TOGGLE_FOLLOW = "TOGGLE_FOLLOW"
const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"
const TOGGLE_FETCHING = "TOGGLE_FETCHING"
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS"

let initialState = {
    users: [],
    pageSize: 20,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

const findUsersReducer = (state = initialState, action) => {
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
                followingInProgress: action.followingInProgress ?
                    [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
            break
    }
    return state
}


export const onToggleFollow = (id) => ({
    type: TOGGLE_FOLLOW,
    id: id
})

export const setUsersActionCreator = (users) => ({
    type: SET_USERS,
    users: users
})

export const setCurrentPageActionCreator = (currentPage) => ({
    type: SET_CURRENT_PAGE,
    currentPage: currentPage
})

export const setTotalUserCount = (totalUserCount) => ({
    type: SET_TOTAL_USERS_COUNT,
    totalUserCount: totalUserCount
})

export const fetching = (isFetching) => ({
    type: TOGGLE_FETCHING,
    isFetching: isFetching
})

export const toggleIsFollowingProgress = (followingInProgress, userId) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    followingInProgress: followingInProgress,
    userId: userId
})

export const getUsers = (currentPage, pageSize) => async (dispatch) => {
    dispatch(fetching(true))
    let data = await usersAPI.getUsers(currentPage, pageSize)

    dispatch(setCurrentPageActionCreator(currentPage))
    dispatch(fetching(false))
    dispatch(setUsersActionCreator(data.items))
    dispatch(setTotalUserCount(data.totalCount))
}

export const follow = (userId) => async (dispatch) => {
    dispatch(toggleIsFollowingProgress(true, userId))
    let response = await usersAPI.followUser(userId)

    dispatch(toggleIsFollowingProgress(false, userId))
    dispatch(onToggleFollow(userId))
}

export const unfollow = (userId) => async (dispatch) => {
    dispatch(toggleIsFollowingProgress(true, userId))
    let response = usersAPI.unFollowUser(userId)

    dispatch(toggleIsFollowingProgress(false, userId))
    dispatch(onToggleFollow(userId))
}

export default findUsersReducer