export const getUsersSelector = (state : any) => {
    return state.findUsers.users
}

export const getPageSizeSelector = (state : any) => {
    return state.findUsers.pageSize
}

export const getTotalUsersCountSelector = (state : any) => {
    return state.findUsers.totalUsersCount
}

export const getCurrentPageSelector = (state : any) => {
    return state.findUsers.currentPage
}

export const isFetchingSelector = (state : any) => {
    return state.findUsers.isFetching
}

export const followingInProgressSelector = (state : any) => {
    return state.findUsers.followingInProgress
}