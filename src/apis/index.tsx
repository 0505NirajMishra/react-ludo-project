import axios, { AxiosRequestConfig, AxiosRequestHeaders } from 'axios';
import { storeKeys } from './constants';
const baseURL = 'http://rassgroups.com/ludo/public/api/v1';
// const baseURL = 'http://127.0.0.1:8000/api/v1';
const instance = axios.create({ baseURL });

instance.interceptors.request.use(function (config: AxiosRequestConfig) {
    const token = localStorage.getItem(storeKeys.access_token) || '';
    if (token) {
        const headers: AxiosRequestHeaders = {
            Authorization: token
        };
        config.headers = headers;
    }
    return config;
});

export interface AuthParams {
    email: string;
    password: string;
};

export interface SignupParams {
    name: string;
    email: string;
    password: string;
};

export const auth = (form: AuthParams) => instance({
    method: 'POST',
    url: `/customer/login`,
    data: form,
    responseType: 'json'
});

export const register = (form: SignupParams) => instance({
    method: 'POST',
    url: `/customer/register`,
    data: form,
    responseType: 'json'
});