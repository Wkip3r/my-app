import React from "react";
import Header from "./Header";
import {logout} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";


class HeaderContainer extends React.Component<PropsType> {

    render() {
        return <Header {...this.props} />
    }
}

type PropsType = MapStatePropsType & MapDispatchPropsType

type MapStatePropsType = {
    isAuth: boolean | null
    login: string | null
}

type OwnPropsType = {

}

type MapDispatchPropsType = {
    logout: () => void
}

const mapStateToProps = (state: AppStateType):MapStatePropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect<MapStatePropsType,MapDispatchPropsType, OwnPropsType,AppStateType>(mapStateToProps,{logout})(HeaderContainer)