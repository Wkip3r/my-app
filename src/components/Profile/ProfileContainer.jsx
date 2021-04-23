import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import { setUserProfileThunk } from "../../redux/profileReducer";
import {Redirect, withRouter} from "react-router";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component{

    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId) {
            userId = 2
        }
        this.props.setUserProfile(userId)
    }

    render () {
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
}

const mapStateToProps = (state) => ({
    profile:state.profile.profile
})

const mapDispatchToProps = {setUserProfile: setUserProfileThunk }

export default compose( connect(mapStateToProps,mapDispatchToProps), withRouter, WithAuthRedirect)(ProfileContainer)