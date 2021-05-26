import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "6f7d744f-ec96-4e73-a718-b757875eac2b"
    },
})

export const authAPI = {
    login(formData){
        return instance.post(`auth/login`,{
            email: formData.email,
            password: formData.password,
            rememberMe: formData.rememberMe || false,
            captcha: formData.captcha || null
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
    },
    savePhoto(photoFile){
        var formData = new FormData()
        formData.append("image",photoFile)

        return instance.put("profile/photo",formData, {
            headers: {
                'Content-Type' : 'multipart/form'
            }
        })
    },
    setProfile(profileInfo){
        return instance.put("/profile",profileInfo)
    }
}

export const securityAPI = {
    getCaptchaUrl(){
        return instance.get("security/get-captcha-url")
    }
}



