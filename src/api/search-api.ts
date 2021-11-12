import {APIResponseType, baseURL, StatusCodesEnum} from "./api";
import axios from "axios";

export type SearchResponseType = {
    hints: Array<string>,
    status: StatusCodesEnum,
}

export const searchAPI = {
    getHints(letters: string) {
        let formdata = new FormData();
        formdata.append('letters', letters);
        return axios.post<SearchResponseType>(baseURL + `api/predict_hints`, formdata)
            .then(response => response.data)
    },
}
