import {APIResponseType, baseURL} from "./api";
import axios from "axios";

export type LoginResponseType = {
    access: string,
    refresh: string,
}

export const authAPI = {
    login(username: string, password: string) {
        let formdata = new FormData();
        formdata.append('username', username);
        formdata.append('password', password);
        return axios.post<APIResponseType<LoginResponseType>>(baseURL + `api/auth/jwt/create`, formdata)
            .then(response => response.data)
    },
}
