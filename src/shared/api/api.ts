import axios, {AxiosInstance} from 'axios';
import {UserType} from "../config/types/types";

export const instance: AxiosInstance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    headers: {
        'API-KEY': 'a1baa9f4-f59d-4ee5-84a2-f2957c9054b8'
    }

});

export enum ResultCodesEnum {
    Success = 0,
    Error = 1
}

export enum ResultCodeForCapcthaEnum {
    CaptchaIsRequired = 10
}

export type GetItemsType = {
    items: Array<UserType>
    totalCount: number
    error: string | null
}
export type APIResponseType<D = {}, RC = ResultCodesEnum> = {
    data: D
    messages: Array<string>
    resultCode: RC
}