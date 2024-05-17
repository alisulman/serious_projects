/* eslint-disable no-unused-vars */

import * as React from 'react'
import { Link } from 'react-router-dom'
import { FcGoogle } from "react-icons/fc";
import { TiSocialFacebook } from "react-icons/ti";
import Form from '../../component/form';
import Logo from '../../../public/assets/logo';

const RegistrationScreens = () => {
    const [page, setPage] = React.useState('Signup')

    const handleClick = () => {
        if (page === "Signup") {
            setPage("Login")
        } else {
            setPage("Signup")
        }
    }

    return (
        <>
            <Link to="/" className="flex items-center text-sm font-semibold uppercase m-3  sm:text-base md:text-lg lg:text-2xl xl:text-3xl"><Logo color='black' width='w-20' height='h-12' /><div className='mx-4'>Infinity Isles</div></Link>

            <div id='wrapper'>

                <div className="container flex flex-col justify-center items-center mx-auto">
                    <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">{page}</h1 >
                    <h1 className="flex text-sm my-3 sm:text-base md:text-lg lg:text-xl xl:text-2xl">{page === 'Signup' ? "Already" : "Don't"} have an account?<span className='flex items-center text-xs text-blue-600 sm:text-sm md:text-base lg:text-lg xl:text-xl cursor-pointer px-1' onClick={handleClick}>{page === 'Signup' ? 'Login' : 'Signup'}</span></h1>
                </div>

                <div className="flex flex-col justify-center items-center sm:flex-row sm:gap-5 md:gap-10 lg:gap-20">
                    <Form page={page} />

                    <div className="flex flex-row items-center justify-center sm:flex-col">
                        <div className="h-0.5 w-40 bg-gray-200 sm:w-0.5 sm:min-h-40"></div>
                        <span className="bg-white px-2 pb-0.5 my-8 sm:bg-none sm:px-0 sm:pb-0 sm:my-2">or</span>
                        <div className="h-0.5 w-40 bg-gray-200 sm:w-0.5 sm:min-h-40"></div>
                    </div>

                    <div className="max-w-lg flex flex-col gap-4 cursor-pointer">
                        <div className="flex"><FcGoogle className="border w-9 h-9 p-1.5 border-blue-600 bg-white sm:p-1 md:p-1.5 lg:p-2 sm:w-10 md:w-12 lg:w-14 sm:h-10 md:h-12 lg:h-12" />
                            <div
                                className="flex justify-center items-center text-white bg-blue-700 w-[320px] sm:w-48 md:w-60 lg:w-full sm:px-1 md:px-10 lg:px-20 sm:text-xs md:text-sm lg:text-base sm:py-1 md:py-1.5 lg:py-2">
                                Continue with Google
                            </div>
                        </div>
                        <div className="flex"><TiSocialFacebook className="border border-blue-900 text-blue-900 bg-white w-9 h-9 p-1 sm:p-1 md:p-1.5 lg:p-2 sm:w-10 md:w-12 lg:w-14 sm:h-10 md:h-12 lg:h-12" />
                            <div
                                className="flex justify-center items-center text-white bg-blue-900 w-[320px] sm:w-48 md:w-60 lg:w-full sm:text-xs md:text-sm lg:text-base sm:py-1 md:py-1.5 lg:py-2 sm:px-1 md:px-10 lg:px-20">
                                Continue with Facebook
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default RegistrationScreens