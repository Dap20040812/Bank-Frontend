import axios from "axios"

const USERS_REST_API_URL = 'http://localhost:8080/1005280915/accounts'

class UserService {

    getAccounts(){
        return axios.get(USERS_REST_API_URL)
    }
}

export default new UserService()