import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import News from "./components/News/News";
import style from "./App.module.css"
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route} from "react-router-dom"
import DialogsConteiner from './components/Dialogs/DialogsConteiner';
import ProfileContainer from "./components/Profile/ProfileContainer";
import FindUsersComponent from "./components/FindUsers/FindUsersComponent";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/login/Login";


const App = () => {
    return (
        <BrowserRouter>
            <div className={style.appWrapper}>
                <HeaderContainer />
                <Navbar />
                <div class={style.appWrapperContent}>
                    <Route path="/profile/:userId?">
                        <ProfileContainer />
                    </Route>
                    <Route path="/dialogs">
                        <DialogsConteiner />
                    </Route>
                    <Route path="/findUsers">
                        <FindUsersComponent />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/news" component={News}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/settings" component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
