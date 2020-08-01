import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers:     {
        "API-KEY": "488e68d3-cd10-424d-a956-e04126b8ef83"
    }
});


export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },
    profile(userId){
        return profileApi.profile(userId)
    },
};

export const authApi = {
    aboutMe(){
        return instance.get(`auth/me`).then(response => {
            return response.data;
        });
    },
};

export const profileApi = {
    profile(userId){
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId){
        return instance.get(`/profile/status/${userId}`)
    },
    setStatus(status) {
        return instance.put(`/profile/status`,{status}) 
    }
};