import React from "react";
import Header from "./Header";
import {setAuthUserDataThunk} from "../../redux/auth-reducer";
import {connect} from "react-redux";


class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.setAuthUserDataThunk()
    }

    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps,{setAuthUserDataThunk})(HeaderContainer)