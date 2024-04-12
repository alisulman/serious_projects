/* eslint-disable react-hooks/rules-of-hooks */
import axios from 'axios'
import * as React from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'

const PrivateRoute = () => {

    const [ok, setOk] = React.useState(false)

    const state = useSelector(state => state.user)
    const data = state.auth

    React.useEffect(() => {
        const checkToken = async () => {
            let response = await axios.get('http://localhost:4000/api/dashboard')
            if (response.data.success) {
                setOk(true)
            } else {
                setOk(false)
            }
        }
        if (data?.token) {
            checkToken()
        }
    }, [data?.token])
console.log(data?.token)
    return ok ? <Outlet /> : 'spinner'
}

export default PrivateRoute
