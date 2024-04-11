/* eslint-disable react/prop-types */
/* eslint-disable no-useless-escape */
/* eslint-disable react-hooks/rules-of-hooks */

import * as React from 'react'
import Icon from 'react-icons-kit'
import { eye } from 'react-icons-kit/icomoon/eye'
import { eyeBlocked } from 'react-icons-kit/icomoon/eyeBlocked'
import { blank } from 'react-icons-kit/metrize/blank'
import { check } from 'react-icons-kit/metrize/check'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import registory from '../../app/actions/authAction'
import toast from 'react-hot-toast';
import Alert from './alert'


const credInitial = {
    username: '',
    email: '',
    password: ''
}

const passInitial = {
    lowercase: false,
    uppercase: false,
    specialcase: false,
    number: false,
    characters: false
}

const Form = ({ page }) => {
    // hooks
    const [cred, setCred] = React.useState(credInitial)
    const [pass, setPass] = React.useState(passInitial)
    const [type, setType] = React.useState('password')

    // variables
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const state = useSelector(state => state.user)
    const data = state.isUser

    // password setup
    const handleChange = (value) => {
        const lower = new RegExp('(?=.*[a-z])');
        const upper = new RegExp('(?=.*[A-Z])');
        const number = new RegExp('(?=.*[0-9])');
        const special = new RegExp('(?=.*[!@#\$%\*])');
        const length = new RegExp('(?=.{8,})');

        const newPasswordState = {
            lowercase: lower.test(value),
            uppercase: upper.test(value),
            number: number.test(value),
            specialcase: special.test(value),
            characters: length.test(value)
            // ? true : false
        }
        setPass(newPasswordState);
        setCred(prevState => ({
            ...prevState,
            password: value
        }));
    }

    // submittions 
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(registory(cred.username, cred.email, cred.password, navigate, page))
    }
    
    const handleonChange = (e) => {
        setCred(pre => ({
            ...pre, [e.target.name]: e.target.value
        }))
    }
    
    React.useEffect(() => {
        data && toast.success(data.message)
    }, [data])

    React.useEffect(() => {
        setCred(credInitial)
    }, [page])

    return (
        <>
            <Alert />
            <form className="w-80 sm:w-[290px] md:min-w-[300px] lg:min-w-[400px]" noValidate>

                {page === 'Signup' && (
                    <div className="relative h-11  mb-8">
                        <input
                            placeholder="Username"
                            id="username"
                            type="text"
                            name="username"
                            value={cred.username}
                            onChange={handleonChange}
                            className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100 invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 peer"
                            required
                        />
                        <label
                            className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                            Username
                        </label>
                    </div>
                )}

                <div className="relative h-11 my-8">
                    <input
                        placeholder="Email"
                        id="email"
                        type="text"
                        name="email"
                        value={cred.email}
                        onChange={handleonChange}
                        className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100 invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-400"
                        required
                        pattern="[^\s@]+@[^\s@]+\.[^\s@]+$"
                    />
                    <div className="hidden text-xs text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block  my-1">Please enter a valid email</div>
                    <div></div>

                    <label
                        className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                        Email
                    </label>
                </div>

                <div className="relative h-11 my-8">
                    <input
                        placeholder="Password"
                        id="password"
                        type={type}
                        name="password"
                        value={cred.password}
                        onChange={e => handleChange(e.target.value)}
                        className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100 invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-400"
                        required
                        pattern="(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$"
                    />

                    {type === "password" ? (
                        <span className='absolute text-gray-600 inset-y-0 end-0 flex items-center pe-3' onClick={() => setType("text")}><Icon icon={eye} /></span>
                    ) : (
                        <span className='absolute text-gray-600 inset-y-0 end-0 flex items-center pe-3' onClick={() => setType("password")}><Icon icon={eyeBlocked} /></span>
                    )}

                    <div className="hidden text-xs text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block  my-1">Please enter a valid password</div>

                    <label
                        className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                        Password
                    </label>

                    {page === "Signup" && (
                        <div className='peer-focus:block hidden absolute bg-white border border-gray-800 rounded-lg w-full p-2 my-3'>
                            <div className={`flex ${pass.lowercase ? 'text-gray-400' : "text-gray-800"}`}>
                                {pass.lowercase ? (
                                    <div className='mr-2 text-green-600'><Icon icon={check} /></div>
                                ) : (
                                    <div className='mr-2'><Icon icon={blank} /></div>
                                )}
                                At least one lowercase letter
                            </div>
                            <div className={`flex ${pass.uppercase ? 'text-gray-400' : "text-gray-800"}`}>
                                {pass.uppercase ? (
                                    <div className='mr-2 text-green-600'><Icon icon={check} /></div>
                                ) : (
                                    <div className='mr-2'><Icon icon={blank} /></div>
                                )}
                                At least one uppercase letter
                            </div>
                            <div className={`flex ${pass.number ? 'text-gray-400' : "text-gray-800"}`}>
                                {pass.number ? (
                                    <div className='mr-2 text-green-600'><Icon icon={check} /></div>
                                ) : (
                                    <div className='mr-2'><Icon icon={blank} /></div>
                                )}
                                At least one number
                            </div>
                            <div className={`flex ${pass.specialcase ? 'text-gray-400' : "text-gray-800"}`}>
                                {pass.specialcase ? (
                                    <div className='mr-2 text-green-600'><Icon icon={check} /></div>
                                ) : (
                                    <div className='mr-2'><Icon icon={blank} /></div>
                                )}
                                At least one special character
                            </div>
                            <div className={`flex ${pass.characters ? 'text-gray-400' : "text-gray-800"}`}>
                                {pass.characters ? (
                                    <div className='mr-2 text-green-600'><Icon icon={check} /></div>
                                ) : (
                                    <div className='mr-2'><Icon icon={blank} /></div>
                                )}
                                At least 8 characters
                            </div>
                        </div>
                    )}

                </div>

                <div className="flex justify-end">
                    <button
                        type="submit"
                        id="submitBtn"
                        className="text-sm text-blue-800 font-medium bg-white  border border-blue-800 rounded-full w-full px-9 py-1.5 mt-3 focus:ring-1 focus:ring-blue-300 focus:outline-none hover:bg-blue-800 hover:text-white sm:text-[10px] md:text-xs lg:text-sm sm:px-5 md:px-7 lg:px-9 sm:py-0.5 md:py-1 lg:py-1.5 sm:my-1 md:my-2 lg:my-3"
                        onClick={handleSubmit}
                    >
                        {page}
                    </button>
                </div>

            </form>
        </>
    )
}

export default Form