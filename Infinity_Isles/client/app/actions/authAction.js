/* eslint-disable no-const-assign */
import { registoryFailure, registorySuccess, setAuth } from '../slices/authSlice'
import axios from 'axios'

const registory = (username, email, password, navigate, page) => async (dispatch) => {
    try {
        let url = ''
        let data = {}
        if (page === 'Signup') {
            url = "http://localhost:4000/api/auth/signup"
            data = { username, email, password }
        } else if (page === 'Login') {
            url = "http://localhost:4000/api/auth/signin"
            data = { email, password }
        }
        const response = await axios.post(url, data)
        const user = response.data
        dispatch(registorySuccess(user))
        setTimeout(() => {
            navigate('/')
        }, 1500);
        dispatch(setAuth(user))
        localStorage.setItem('auth', JSON.stringify(user))
        axios.defaults.headers.common['Authenticate'] = user?.token
    } catch (error) {
        dispatch(registoryFailure(
            error.response.data && error.response.data.message
                ? error.response.data.message
                : error.message
                    ? error.message
                    : "Internal Server Error"
        ))
    }
}

export default registory