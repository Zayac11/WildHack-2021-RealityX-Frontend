import {baseURL} from "./api";
import axios from "axios";

export type LoginResponseType = {
    access: string,
    refresh: string,
}

export type CheckAuthorizeResponseType = {
    status: number
}

export const authAPI = {
    login(username: string, password: string) {
        let formdata = new FormData();
        formdata.append('username', username);
        formdata.append('password', password);
        return axios.post<LoginResponseType>(baseURL + `api/auth/jwt/create`, formdata)
            .then(response => response.data)
    },
    checkAuthorize() {
        const accessToken = 'Bearer ' + localStorage.getItem('accessToken')
        return axios.get<CheckAuthorizeResponseType>(baseURL + `api/is_authenticated`,
            {
                headers: {
                    'Authorization': `${accessToken}`
                },
            })
            .then(response => response.data)
    }
}
