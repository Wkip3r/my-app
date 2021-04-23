import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "22c53bba-330d-45c3-aaff-839659497c3e"
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    setAuthUser() {
        return instance.get(`auth/me`)
    },
    followUser(userId) {
        return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {})
            .then(response => {
                if (response.data.resultCode === 0) {
                    return response.data
                }
            })
            .catch(err => new Error(err))
    },
    unFollowUser(userId) {
        return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {})
            .then(response => {
                if (response.data.resultCode === 0) {
                    return response.data
                }
            })
            .catch(err => new Error(err))
    },
    setUserProfile(userId){
        return axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                return response.data
            })
    },
}



