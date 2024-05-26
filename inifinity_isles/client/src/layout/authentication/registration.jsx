/* eslint-disable no-unused-vars */

import * as React from 'react'
import { Link } from 'react-router-dom'
import { FcGoogle } from "react-icons/fc";
import { TiSocialFacebook } from "react-icons/ti";
import Form from '../../component/form';
import Logo from '../../../public/assets/logo';
import SEO_Comp from '../../component/SEO';
import { useSelector } from 'react-redux';
import GoogleLoginSetup from '../../utils/googleLogin';
import { useRef } from 'react';


const RegistrationScreens = () => {
    const [page, setPage] = React.useState('Signup')
    const googleRef = useRef()

    const handleClick = () => {
        if (page === "Signup") {
            setPage("Login")
        } else {
            setPage("Signup")
        }
    }

    const handleGoogle = () => {
        googleRef.current.click()
    }
    const state = useSelector(state => state.User)
    console.log(state)

    return (
        <>
            <SEO_Comp title={`${page === 'Signup' ? 'Signup' : 'Login'}-Inifinity Isles`} description='Make new or login exist info for shoping easier' keywords='Shopping, Ecommerce Store' author='Ali Sulman' />
            <div className='hidden sm:block'><Link to="/" className="flex items-center text-sm font-semibold uppercase m-3  sm:text-base md:text-lg lg:text-2xl xl:text-3xl"><Logo color='black' width='w-20' height='h-12' /><div className='mx-4'>Infinity Isles</div></Link></div>

            <div id='wrapper' className='mt-12'>

                <div className="container flex flex-col justify-center items-center mx-auto">
                    <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">{page}</h1 >
                    <h1 className="flex text-sm my-3 sm:text-base md:text-lg lg:text-xl xl:text-2xl">{page === 'Signup' ? "Already" : "Don't"} have an account?<span className='flex items-center text-xs text-blue-600 sm:text-sm md:text-base lg:text-lg xl:text-xl cursor-pointer px-1' onClick={handleClick}>{page === 'Signup' ? 'Login' : 'Signup'}</span></h1>
                </div>

                <div className="flex flex-col justify-center items-center sm:flex-row sm:gap-5 md:gap-10 lg:gap-20">
                    <Form page={page} />

                    <div className="flex flex-row items-center justify-center sm:flex-col my-4">
                        <div className="h-0.5 w-40 bg-gray-200 sm:w-0.5 sm:min-h-40"></div>
                        <span className="bg-[#F5F5F5] px-2 pb-0.5 my-8 sm:bg-none sm:px-0 sm:pb-0 sm:my-2">or</span>
                        <div className="h-0.5 w-40 bg-gray-200 sm:w-0.5 sm:min-h-40"></div>
                    </div>

                    <div className="flex flex-col gap-4 cursor-pointer w-80">
                        <GoogleLoginSetup  width={320}/>
                        <div className="flex"><TiSocialFacebook className="rounded-tl rounded-bl border border-blue-900 text-blue-900 bg-white text-4xl p-1.5 w-11" />
                            <div className=" rounded-tr rounded-br flex justify-center items-center text-white bg-blue-900 hover:bg-opacity-80 w-full sm:text-xs md:text-sm lg:text-base sm:py-1 md:py-1.5 lg:py-1.5">
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