import {getCaptchaURLType, instance} from "./api";

export const securityAPI = {
    getCaptchaUrl() {
        return instance
            .get<getCaptchaURLType>(`/security/get-captcha-url`)
            .then(res => res.data);
        ;
    },
};