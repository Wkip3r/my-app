import Navbar from './components/Navbar/Navbar';
import News from "./components/News/News";
import style from "./App.module.css"
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route} from "react-router-dom"
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/login/Login";
import React, {Component} from "react";
import {connect, Provider} from "react-redux";
import {initializeApp} from "./redux/appReducer";
import Preloader from "./components/common/preloader/preloader";
import store from "./redux/reduxStore";
import {compose} from "redux";
import {LazyComponent, withLazyComponent, withSuspense} from './hoc/ReactLazy';
import {Redirect, Switch} from "react-router";

const DialogsConteiner = React.lazy(() => import('./components/Dialogs/DialogsConteiner'))
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))
const FindUsersComponent = React.lazy(() => import('./components/FindUsers/FindUsersComponent'))

class App extends Component {
    catchAllUnhaldedErrors = (reason,promiseRejectionEvent) => {
        alert("Some error occured")
        console.error(promiseRejectionEvent)
    }

    componentDidMount() {
        this.props.initializeApp()
        window.addEventListener("unhandledrejection", this.catchAllUnhaldedErrors)
    }

    componentWillUnmount() {
        window.removeEventListener("unhandledrejection", this.catchAllUnhaldedErrors)
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <BrowserRouter>
                <div className={style.appWrapper}>
                    <HeaderContainer/>
                    <Navbar/>
                    <div className={style.appWrapperContent}>
                        <Switch>
                            <Route exact path="/"
                                   render={() => <Redirect to={"/Profile"} />} />
                            <Route path="/profile/:userId?"
                                   render={withSuspense(ProfileContainer)}
                            />
                            <Route path="/dialogs"
                                   render={withSuspense(DialogsConteiner)}
                            />
                            <Route path="/findUsers"
                                   render={withSuspense(FindUsersComponent)}
                            />
                            <Route path="/login">
                                <Login/>
                            </Route>

                            <Route path="/news" component={News}/>
                            <Route path="/music" component={Music}/>
                            <Route path="/settings" component={Settings}/>

                            <Route path="*"
                                   render={() => <div>404</div>}/>
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

let AppContainer = connect(mapStateToProps, {initializeApp},)(App)

const SamuraiJSApp = (props) => {
    return (
        <React.StrictMode>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </React.StrictMode>
    )
}

export default SamuraiJSApp
