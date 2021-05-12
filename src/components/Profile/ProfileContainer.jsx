import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {editStatus, getStatus, setUserProfileThunk, updateStatus} from "../../redux/profileReducer";
import {Redirect, withRouter} from "react-router";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component{

    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId) {
            userId = this.props.userId
            if(!userId){
                this.props.history.push("/login")
            }
        }
        this.props.setUserProfile(userId)
        this.props.getStatus(userId)
    }

    render () {
        return (
            <Profile {...this.props}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}
            />
        )
    }
}

const mapStateToProps = (state) => ({
    profile:state.profile.profile,
    isEditStatus: state.profile.isEditStatus,
    status: state.profile.status,
    userId: state.auth.id,
    isAuth: state.auth.isAuth
})

const mapDispatchToProps = {
    setUserProfile: setUserProfileThunk,
    editStatus,
    getStatus,
    updateStatus
}

export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    withRouter,
    WithAuthRedirect
)(ProfileContainer)