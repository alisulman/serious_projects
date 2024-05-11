import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Outlet, useNavigate } from 'react-router-dom'
import { checkToken, roleChecker } from "../../../apps/action/authAction"
import { SpinnerTwo } from "../../component/spinner"

export const PrivateRoute = () => {
    const [ok, setOk] = useState(false)
    const [count, setCount] = useState(2)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const state = useSelector(state => state.User)
    const user = state.isAuth
    
    useEffect(() => {
        if (!user?.token) {
            const interval = setInterval(() => {
                setCount(decre => --decre)
            }, 1000)
            if (count === 0) {
                clearInterval(interval)
            }
            return () => {
                clearInterval(interval)
            }
        }
    }, [count, user?.token])

    useEffect(() => {
        if (user?.token) {
            dispatch(checkToken(setOk))
        }
        count === 0 && navigate('/authenctication/registeration')
    }, [user?.token, dispatch, navigate, count])
    

    console.log(ok)
    return ok ? <Outlet /> : (
        <div className="flex flex-col items-center justify-center h-screen">
            <span className="text-4xl mb-2">Oops! Wrong Gateway</span>
            <span className="text-xl mb-10">it takes a minute please wait...</span>{count}
            <SpinnerTwo />
        </div>
    )
}

export const CheckRole = () => {
    const [ok, setOk] = useState(false);
    const [count, setCount] = useState(3);

    const state = useSelector(state => state.User);
    const user = state.isAuth;

    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if (!user?.data?.role || user?.data?.role === "user") {
            const interval = setInterval(() => {
                setCount(prevCount => prevCount - 1);
            }, 1000);
            if (count === 0) {
                clearInterval(interval);
                navigate('/profile');
            }
            return () => clearInterval(interval);
        }
        if (user?.data?.role) {
            dispatch(roleChecker(setOk));
        }
    }, [count, user?.data?.role, dispatch, navigate]);

    useEffect(() => {
        if (user?.data?.role === "buyer") {
            navigate('purchaser');
        } else if (user?.data?.role === "seller") {
            navigate('vendor');
        }
    }, [user?.data?.role, navigate]);

    return ok ? <Outlet /> : (
        <div className="flex flex-col items-center justify-center h-screen">
            <span className="text-4xl mb-2">Oops! Wrong Gateway</span>
            <span className="text-xl mb-10">Please wait...</span>
            {count}
            <SpinnerTwo />
        </div>
    );
};
