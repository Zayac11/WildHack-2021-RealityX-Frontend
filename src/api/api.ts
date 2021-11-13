// export const baseURL = process.env.REACT_APP_PRODUCTION_URL || window.location.origin + "/";
export const baseURL = 'http://89.108.79.130:8007/'

export enum StatusCodesEnum {
    Success = 200,
    NotFound = 404,
    BadRequest = 400,
    Forbidden = 403,
    ServerError = 500,
}

export type APIResponseType<D = {}, SC = StatusCodesEnum> = {
    message: string
    status: SC
    data: D
}
