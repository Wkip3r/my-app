import {connect} from "react-redux";
import Friends from "./Friends";
import {AppStateType} from "../../../redux/reduxStore";
import {FriendType} from "../../../redux/navbarReducer";


const mapStateToProps = (state: AppStateType):MapStatePropsType => {
    return {
        friendsData: state.navbar.friends
    }
}

type PropsType = MapStatePropsType

type MapStatePropsType = {
    friendsData: Array<FriendType>
}

const mapDispatchToProps = {}

const FriendsConteiner = connect<MapStatePropsType,{},{}, AppStateType>(mapStateToProps,mapDispatchToProps)(Friends)

export default FriendsConteiner