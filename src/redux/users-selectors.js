export const getUsersSelector = (state) => {
    return state.findUsers.users
}

export const getPageSizeSelector = (state) => {
    return state.findUsers.pageSize
}

export const getTotalUsersCountSelector = (state) => {
    return state.findUsers.totalUsersCount
}

export const getCurrentPageSelector = (state) => {
    return state.findUsers.currentPage
}

export const isFetchingSelector = (state) => {
    return state.findUsers.isFetching
}

export const followingInProgressSelector = (state) => {
    return state.findUsers.followingInProgress
}