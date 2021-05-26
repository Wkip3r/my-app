import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    editStatus,
    getStatus,
    setProfile,
    setUserProfileThunk,
    updateStatus
} from "../../redux/profileReducer";
import {withRouter} from "react-router";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component{

    refreshProfile() {
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

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.match.params.userId !== prevProps.match.params.userId){
            this.refreshProfile()
        }

        if(JSON.stringify(this.props.profile) !== JSON.stringify(prevProps.profile)){
            this.refreshProfile()
        }
    }

    render () {
        return (
            <Profile {...this.props}
                     isOwner={!this.props.match.params.userId}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}
                     savePhoto={this.props.savePhoto}
            />
        )
    }
}

const mapStateToProps = (state) => ({
    id:state.auth.id,
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
    updateStatus,
    setProfile
}

export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    withRouter,
    WithAuthRedirect
)(ProfileContainer)