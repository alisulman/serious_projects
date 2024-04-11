import { loginFailure, loginSuccess, setauth, signupFailure, signupSuccess } from '../slices/authSlice'
import axios from 'axios'

export const signup = (username, email, password, navigate) => async (dispatch) => {
    try {
        const response = await axios.post('http://localhost:4000/api/auth/signup', { username, email, password })
        const user = response.data
        dispatch(signupSuccess(user))
        setTimeout(() => {
            navigate('/')
        }, 1500);
    } catch (error) {
        dispatch(signupFailure())
    }
}

export const login = (email, password, navigate) => async (dispatch) => {
    try {
        const response = await axios.post('http://localhost:4000/api/auth/signin', { email, password })
        const user = response.data
        const data = JSON.parse(localStorage.getItem('auth'))
        dispatch(loginSuccess(user))
        dispatch(setauth(data))
        setTimeout(() => {
            navigate('/')
        }, 1500);
    } catch (error) {
        dispatch(loginFailure())
    }
}
