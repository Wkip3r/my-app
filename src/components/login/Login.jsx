import {Field, reduxForm} from "redux-form";
import React from "react";
import {connect} from "react-redux";
import {login, logout} from "../../redux/auth-reducer";
import {required} from "../../utils/validators/validators";
import {Element} from "../common/FormsControls/FormsControls";
import {Redirect} from "react-router";
import styles from "../common/FormsControls/FormsControls.module.css"



const LoginFrom = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"} name={"email"} component={Element("input")} validate={[required]} />
            </div>
            <div>
                <Field type={"password"} placeholder={"Password"} name={"password"} component={Element("input")} validate={[required]} />
            </div>
            <div>
                <Field type={"checkbox"} name={"rememberMe"} component={Element("input")} /> remember me
            </div>
            {props.error
                ? <div className={styles.formSummeryError}> {props.error} </div>
                : null}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxFrom = reduxForm({ form: 'login' })(LoginFrom)

class Login extends React.Component{

    onSubmit = (formData) => {
        this.props.login(formData)
    }

    render(){
        if (this.props.isAuth){
            return <Redirect to={"/profile"} />
        }

        return (
            <div>
                <h1>LOGIN</h1>
                <LoginReduxFrom onSubmit={this.onSubmit} />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    form: state.form,
    isAuth:state.auth.isAuth
})
const mapDispatchToProps = { login, logout }

export default connect(mapStateToProps,mapDispatchToProps)(Login)