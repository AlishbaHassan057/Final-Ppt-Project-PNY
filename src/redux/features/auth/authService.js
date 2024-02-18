import axios from 'axios';

const base_url = 'http://localhost"5175/api/user';
const registerUser = async (userData) => {
    const response = axios.post(`${base_url}/register-user`, userData)
    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))

    }
    return response.data
}

export const authService = {
    registerUser
}