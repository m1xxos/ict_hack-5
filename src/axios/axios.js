import axios from "axios";

export default class api {
    static async getUsers(accessToken = null) {
        const AuthStr = 'Bearer ' + accessToken;
        const response = await axios.get('api.ictkek.ga', {headers: {"Authorization": AuthStr}})
        return response
    }

    static async register({name, middlename, surname, email, phone, password}) {
        console.log({name, middlename, surname, email, phone, password})
        const response = await axios.post('https://api.ictkek.ga/auth/register', {name, middlename, surname, email, phone, password})
        console.log(response)
    }

    static async login(email, password) {
        const response = await axios.post('api.ictkek.ga', {email, password})
        return response
    }
}