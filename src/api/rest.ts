import axios, { AxiosInstance } from "axios";

class RestAPI {
    instance: AxiosInstance
    constructor() {
        this.instance = axios.create({
            baseURL: 'https://dummyjson.com',
            timeout: 10000,
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
}

const rest = new RestAPI().instance;

export default rest;