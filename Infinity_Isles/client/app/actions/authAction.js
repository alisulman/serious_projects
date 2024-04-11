/* eslint-disable no-const-assign */
import { registorySuccess } from '../slices/authSlice'
import axios from 'axios'

const registory = (username, email, password, navigate, page) => async (dispatch) => {
    try {
        let url = ''
        let data = {}
        if(page === 'Signup'){
            url = "http://localhost:4000/api/auth/signup"
            data = {username, email, password}
        }else if(page === 'Login'){
            url = "http://localhost:4000/api/auth/signin"
            data = {email, password}
        }
        const response = await axios.post(url, data)
        const user = response.data
        dispatch(registorySuccess(user))
        // setTimeout(() => {
        //     navigate('/')
        // }, 1500);
    } catch (error) {
        console.log(error.message)
    }
}

export default registory