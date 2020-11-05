import { HttpService } from './HttpService'

class AuthService extends HttpService {

    login(email, password) {
         return this.axios.post('http://localhost:8000/api/login', {email, password})
    }
}
    export const authService = new AuthService() 