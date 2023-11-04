import axios from 'axios'

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return (instance
            .get((`users?page=${currentPage}&count=${pageSize}`))
            .then(response => (response.data)))
    },
    getProfile(userId) {
        return instance
            .get(`/profile/${userId}`)
    },

    unfollow(userId) {
        return instance
            .delete(`/follow/${userId}`)
            .then(response => response.data);
    },
    follow(userId) {
        return instance
            .post(`/follow/${userId}`)
            .then(response => response.data);
    },
    userProfile(userId, setUserProfile) {
        return instance
            .get(`/profile/${userId}`)
            .then(response => setUserProfile(response.data));
    },

}

export const authAPI = {
    getAuthMe() {
        return instance
            .get(`/auth/me`)

    },
}