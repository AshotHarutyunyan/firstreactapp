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
        return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
    },
    profile(userId){
        return instance.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
    },
    aboutMe(){
        return instance.get(`https://social-network.samuraijs.com/api/1.0/auth/me`).then(response => {
            return response.data;
        });
    },
}