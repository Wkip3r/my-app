import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "22c53bba-330d-45c3-aaff-839659497c3e"
    }
})

export const authAPI = {
    login(formData){
        return instance.post(`auth/login`,{
            email: formData.email,
            password: formData.password,
            rememberMe: formData.rememberMe || false,
        })
            .then(response => response)
            .catch(err => new Error(err))
    },

    logout(){
        return instance.delete(`auth/login`)
    }
}

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
                        .then(response => response.data)
                        .catch(err => new Error(err))
    },
    setAuthUser() {
        return instance.get(`auth/me`)
    },
    followUser(userId) {
        return instance.post(`follow/${userId}`, {})
            .then(response => {
                if (response.data.resultCode === 0) {
                    return response.data
                }
            })
            .catch(err => new Error(err))
    },
    unFollowUser(userId) {
        return instance.delete(`follow/${userId}`, {})
            .then(response => {
                if (response.data.resultCode === 0) {
                    return response.data
                }
            })
            .catch(err => new Error(err))
    },
    setUserProfile(userId){
        return instance.get(`profile/${userId}`)
            .then(response => {
                return response.data
            })
            .catch(err => new Error(err))
    },
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get("profile/" + userId)
    },

    getStatus(userId) {
        return instance.get("profile/status/" + userId)
    },

    updateStatus(status){
        return instance.put('profile/status/', {
            status: status
        })
    }
}



