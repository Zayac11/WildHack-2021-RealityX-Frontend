import {baseURL, StatusCodesEnum} from "./api";
import axios from "axios";

export type SearchResponseType = {
    hints: Array<string>,
    status: StatusCodesEnum,
}

export const searchAPI = {
    getHints(letters: string) {
        let formdata = new FormData();
        formdata.append('letters', letters);
        const accessToken = 'Bearer ' + localStorage.getItem('accessToken')

        if(accessToken === 'Bearer null') {
            return axios.post<SearchResponseType>(baseURL + `api/predict_hints`, formdata)
                .then(response => response.data)
        }
        else {
            return axios.post<SearchResponseType>(baseURL + `api/predict_hints`, formdata,
                {
                    headers: {
                        'Authorization': `${accessToken}`
                    },
                })
                .then(response => response.data)
        }

    },
}
