export type FriendType = {
    id: number
    name:string
}
export type NavbarReducerType = {
    friends: Array<FriendType>
}

let initialState: NavbarReducerType = {
    friends:
        [
            {id: 1, name: "Sasha"},
            {id: 2, name: "Andrei"},
            {id: 3, name: "Oleg"}
        ]
}


const navbarReducer = (state = initialState,action: Object) => {

    return state
}

export default navbarReducer