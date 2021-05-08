import React from "react";
import style from "./FindUsers.module.css"
import UserComponent from "./User/UserC";
import Preloader from "../common/preloader/preloader";
import {connect} from "react-redux";
import {
    fetching,
    follow, getUsers,
    getUsersThunkCreator, onToggleFollow,
    toggleIsFollowingProgress, unfollow
} from "../../redux/findUsersReducer";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";


class FindUsersComponent extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render = () => {
        let pagesCount = Math.ceil((this.props.totalUsersCount / 100) / this.props.pageSize)

        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }


        return (
            <div className={style.findUsers}>
                {this.props.isFetching ? <Preloader/> : null}
                <div>
                    {pages.map(p => {
                        return <span className={this.props.currentPage === p && style.selectedPage}
                                     onClick={(e) => {
                                         this.onPageChanged(p)
                                     }}>{p}</span>
                    })}
                </div>
                <div>
                    {this.props.users.map(user => <UserComponent user={user}
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
        users: state.findUsers.users,
        pageSize: state.findUsers.pageSize,
        totalUsersCount: state.findUsers.totalUsersCount,
        currentPage: state.findUsers.currentPage,
        isFetching: state.findUsers.isFetching,
        followingInProgress: state.findUsers.followingInProgress
    }
}

const mapDispatchToProps =  {
    onToggleFollow,
    fetching,
    follow,
    unfollow,
    toggleIsFollowingProgress,
    getUsers
}

export default compose( connect(mapStateToProps,mapDispatchToProps), WithAuthRedirect)(FindUsersComponent)