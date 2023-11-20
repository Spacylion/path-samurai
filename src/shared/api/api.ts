import axios, {AxiosInstance, AxiosResponse} from 'axios';
import {ContactsType, PhotosType, ProfileType} from "../config/types/types";

const instance: AxiosInstance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    headers: {
        'API-KEY': 'a1baa9f4-f59d-4ee5-84a2-f2957c9054b8'
    }

});

export enum ResultCodesEnum {
    Success = 0,
    Error = 1,
}

export enum ResultCodesForCaptcha {
    CaptchaIsRequired = 10
}

type getUsersType = {
    id: number
    name: string
    status: string
    photos: PhotosType
    followed: boolean
}
type getProfileType = {
    id: number
    name: string
    status: string
    photos: PhotosType
    followed: boolean
}
type unfollowType = {
    id: number
    followed: ResultCodesEnum
}
type followType = {
    id: number
    followed: ResultCodesEnum
}
export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance
            .get<getUsersType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    getProfile(userId: number) {
        return profileAPI
            .getProfile(userId)
    },
    unfollow(userId: number) {
        return instance
            .delete(`/follow/${userId}`)
    },
    follow(userId: number) {
        return instance
            .post<followType>(`/follow/${userId}`)
    },
};

type getProfileType = {
    userId: number
}
type getStatusType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
}
type updateStatusType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
}
type savePhotoType = {
    photos: PhotosType
}
type saveProfileType = {
    userId: number
}
export const profileAPI = {
    getProfile(userId: number) {
        return instance
            .get<getProfileType>(`/profile/` + userId)
            .then(res => res.data)
    },
    getStatus(userId: number) {
        return instance
            .get<getStatusType>(`/profile/status/` + userId)
            .then(res => res.data)
    },
    updateStatus(status: string) {
        return instance
            .put<updateStatusType>(`/profile/status`, {status: status})
            .then(res => res.data)
    },
    savePhoto(photoFile: any) {
        const formData = new FormData()
        formData.append("image", photoFile)
        return instance
            .put<savePhotoType>(`/profile/photo`, formData, {
                headers: {'Content-Type': 'multipart/form-data'}
            })
            .then(res => res.data)
    },
    saveProfile(profile: ProfileType) {
        return instance
            .put(`/profile`, profile)
            .then(res => res.data)
    }
};

type dataMeTypes = {
    id: number
    email: string
    login: string
}
type MeResponseType = {
    data: dataMeTypes
    resultCode: ResultCodesEnum | ResultCodesForCaptcha
    messages: Array<string>
}
type LoginResponseType = {
    data: { userId: number }
    resultCode: number
    messages: Array<string>
}
type LogoutResponseType = {
    data: { userId: number }
    resultCode: ResultCodesEnum
    messages: Array<string>
}
export const authAPI = {
    me() {
        return instance.get<APIResponseType<MeResponseDataType>>(`auth/me`).then(res => res.data);
    },
    login(email: string, password: string, rememberMe = false, captcha: null | string = null) {
        return instance.post<APIResponseType<LoginResponseDataType, ResultCodesEnum | ResultCodeForCapcthaEnum>>(`auth/login`, {email, password, rememberMe, captcha})
            .then(res => res.data);
    },
    logout() {
        return instance.delete(`auth/login`);
    }
}

type getCaptchaURLType = {
    url: string
}
export const securityAPI = {
    getCaptchaUrl() {
        return instance
            .get<getCaptchaURLType>(`/security/get-captcha-url`)
            .then(res => res.data);
        ;
    },
};
