import {connect} from "react-redux";
import Friends from "./Friends";


const mapStateToProps = (state) => {
    return {
        friendsData: state.navbar.friends
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

const FriendsConteiner = connect(mapStateToProps,mapDispatchToProps)(Friends)

export default FriendsConteiner