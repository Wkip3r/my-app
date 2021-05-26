import {
    followingInProgressSelector,
    getCurrentPageSelector,
    getPageSizeSelector,
    getTotalUsersCountSelector,
    getUsersSelector, isFetchingSelector
} from "../redux/users-selectors";

export let GetUsersSelectorType = typeof getUsersSelector

export let GetPageSizeSelectorType = typeof getPageSizeSelector

export let GetTotalUsersCountSelectorType = typeof getTotalUsersCountSelector

export let GetCurrentPageSelectorType = typeof getCurrentPageSelector

export let IsFetchingSelectorType = typeof isFetchingSelector

export let FollowingInProgressSelectorType = typeof followingInProgressSelector