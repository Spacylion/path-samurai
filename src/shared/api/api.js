import axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    headers: {
        "API-KEY": "167f53fe-7397-404d-89da-bd505094f1db"
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
    },

    getProfile(userId) {
        return instance.get(`/profile/${userId}`);
    },

    unfollow(userId) {
        return instance.delete(`/follow/${userId}`).then(response => response.data);
    },

    follow(userId) {
        return instance.post(`/follow/${userId}`).then(response => response.data);
    },
};

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`/profile/${userId}`);
    },

    getStatus(userId) {
        return instance.get(`/profile/status/${userId}`);
    },

    updateStatus(status) {
        return instance.put(`/profile/status`, { status });
    },
};

export const authAPI = {
    getAuthMe() {
        return instance.get(`auth/me`);
    },

    login(email, password, rememberMe = false) {
        return instance.post(`/auth/login`, { email, password, rememberMe });
    },

    logout() {
        return instance.delete(`/auth/login`);
    },
};
