import React from "react";
import style from "./FindUsers.module.css"
import UserComponent from "./User/UserC";
import Preloader from "../common/preloader/preloader";
import {connect} from "react-redux";
import {
    fetching,
    follow,
    getUsers,
    onToggleFollow,
    toggleIsFollowingProgress,
    unfollow
} from "../../redux/findUsersReducer";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";
import {
    followingInProgressSelector,
    getCurrentPageSelector,
    getPageSizeSelector,
    getTotalUsersCountSelector,
    getUsersSelector,
    isFetchingSelector
} from "../../redux/users-selectors";
import Paginator from "../common/Paginator/Paginator";


class FindUsersComponent extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    render = () => {
        return (
            <div className={style.findUsers}>
                {this.props.isFetching ? <Preloader /> : null}
                <Paginator {...this.props} onPageChanged={this.props.getUsers}/>
                <div>
                    {this.props.users.map((user, i) => <UserComponent
                        key={i}
                        user={user}
                        followingInProgress={this.props.followingInProgress}
                        onToggleFollow={this.props.onToggleFollow}
                        toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
                        follow={this.props.follow}
                        unfollow={this.props.unfollow}/>)}
                </div>
                <div>
                    <button>Show more</button>
                </div>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        users: getUsersSelector(state),
        pageSize: getPageSizeSelector(state),
        totalUsersCount: getTotalUsersCountSelector(state),
        currentPage: getCurrentPageSelector(state),
        isFetching: isFetchingSelector(state),
        followingInProgress: followingInProgressSelector(state)
    }
}

const mapDispatchToProps = {
    onToggleFollow,
    fetching,
    follow,
    unfollow,
    toggleIsFollowingProgress,
    getUsers
}

export default compose(connect(mapStateToProps, mapDispatchToProps))(FindUsersComponent)