import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import navbarReducer from "./navbarReducer";
import findUsersReducer from "./findUsersReducer";
import photosReducer from "./photosReducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";


let reducers = combineReducers({
    profile: profileReducer,
    dialogs: dialogsReducer,
    navbar: navbarReducer,
    findUsers: findUsersReducer,
    photo: photosReducer,
    auth: authReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store

export default store