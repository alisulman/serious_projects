import { FcGoogle } from "react-icons/fc";
import { TiSocialFacebook } from "react-icons/ti";
import RegistrationWrap from "../../../components/wrapper/RegistrationWrap";
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <RegistrationWrap>
            <div className="container flex flex-col justify-center items-center mx-auto">
                <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">Login</h1 >
                <h1 className="flex text-sm my-3 sm:text-base md:text-lg lg:text-xl xl:text-2xl">Already have an account?<Link to='/authentication/signup' className='flex items-center text-xs text-blue-600 sm:text-sm md:text-base lg:text-lg xl:text-xl'>Signup</Link></h1>
            </div>
            <div className="flex flex-col justify-center items-center sm:flex-row sm:gap-5 md:gap-10 lg:gap-20">
                <form className="w-80 sm:w-[290px] md:min-w-[300px] lg:min-w-[400px]">
                    <div className="relative h-11 my-5">
                        <input placeholder="Email"
                            type="text"
                            name="email"
                            className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100" />
                        <label
                            className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                            Email
                        </label>
                    </div>
                    <div className="relative h-11 my-5">
                        <input placeholder="Password"
                            type="password"
                            name="password"
                            className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100" />
                        <label
                            className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                            Password
                        </label>
                    </div>
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="text-sm text-blue-800 font-medium bg-white  border border-blue-800 rounded-full w-full px-9 py-1.5 mt-3 focus:ring-1 focus:ring-blue-300 focus:outline-none hover:bg-blue-800 hover:text-white sm:text-[10px] md:text-xs lg:text-sm sm:px-5 md:px-7 lg:px-9 sm:py-0.5 md:py-1 lg:py-1.5 sm:my-1 md:my-2 lg:my-3">
                            Signup
                        </button>
                    </div>
                </form>
                <div className="flex flex-row items-center justify-center sm:flex-col">
                    <div className="h-0.5 w-40 bg-gray-200 sm:w-0.5 sm:min-h-40"></div>
                    <span className="bg-white px-2 pb-0.5 my-8 sm:bg-none sm:px-0 sm:pb-0">or</span>
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

        </RegistrationWrap>
    )
}

export default Login
