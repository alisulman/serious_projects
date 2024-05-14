/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-escape */
/* eslint-disable react/prop-types */


import * as React from 'react'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { RiCheckboxBlankCircleLine } from "react-icons/ri";
import { FaRegCheckCircle } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux'
import { registory } from '../../apps/action/authAction'
import { useNavigate } from 'react-router-dom'
import { cancelProduct, createProduct, updateProduct } from '../../apps/action/prodAction';

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
    const dispatch = useDispatch()
    const navigate = useNavigate()

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
        dispatch(registory(cred.username, cred.email, cred.password, page, navigate))
    }

    const handleonChange = (e) => {
        setCred(pre => ({
            ...pre, [e.target.name]: e.target.value
        }))
    }

    React.useEffect(() => {
        setCred(credInitial)
        setPass(passInitial)
    }, [page])

    // console.log(state)

    return (
        <>
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
                        autoComplete="username"
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
                        autoComplete="current-password"
                    />

                    {type === "password" ? (
                        <span className='absolute text-gray-600 inset-y-0 end-0 flex items-center pe-3' onClick={() => setType("text")}><FaEye /></span>
                    ) : (
                        <span className='absolute text-gray-600 inset-y-0 end-0 flex items-center pe-3' onClick={() => setType("password")}><FaEyeSlash /></span>
                    )}

                    <div className="hidden text-xs text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block  my-1">Please enter a valid password</div>

                    <label
                        className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                        Password
                    </label>

                    {page === "Signup" && (
                        <div className='peer-focus:block hidden absolute bg-white border border-gray-800 rounded-lg w-full p-2 my-3 z-50'>
                            <div className={`flex ${pass.lowercase ? 'text-gray-400' : "text-gray-800"}`}>
                                {pass.lowercase ? (
                                    <div className='mr-2 text-green-600'><FaRegCheckCircle /></div>
                                ) : (
                                    <div className='mr-2'><RiCheckboxBlankCircleLine /></div>
                                )}
                                At least one lowercase letter
                            </div>
                            <div className={`flex ${pass.uppercase ? 'text-gray-400' : "text-gray-800"}`}>
                                {pass.uppercase ? (
                                    <div className='mr-2 text-green-600'><FaRegCheckCircle /></div>
                                ) : (
                                    <div className='mr-2'><RiCheckboxBlankCircleLine /></div>
                                )}
                                At least one uppercase letter
                            </div>
                            <div className={`flex ${pass.number ? 'text-gray-400' : "text-gray-800"}`}>
                                {pass.number ? (
                                    <div className='mr-2 text-green-600'><FaRegCheckCircle /></div>
                                ) : (
                                    <div className='mr-2'><RiCheckboxBlankCircleLine /></div>
                                )}
                                At least one number
                            </div>
                            <div className={`flex ${pass.specialcase ? 'text-gray-400' : "text-gray-800"}`}>
                                {pass.specialcase ? (
                                    <div className='mr-2 text-green-600'><FaRegCheckCircle /></div>
                                ) : (
                                    <div className='mr-2'><RiCheckboxBlankCircleLine /></div>
                                )}
                                At least one special character
                            </div>
                            <div className={`flex ${pass.characters ? 'text-gray-400' : "text-gray-800"}`}>
                                {pass.characters ? (
                                    <div className='mr-2 text-green-600'><FaRegCheckCircle /></div>
                                ) : (
                                    <div className='mr-2'><RiCheckboxBlankCircleLine /></div>
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
                        className={`text-sm text-blue-800 font-medium bg-white  border border-blue-800 rounded-full w-full px-9 py-1.5 mt-3 focus:ring-1 focus:ring-blue-300 focus:outline-none hover:bg-blue-800 hover:text-white sm:text-[10px] md:text-xs lg:text-sm sm:px-5 md:px-7 lg:px-9 sm:py-0.5 md:py-1 lg:py-1.5 sm:my-1 md:my-2 lg:my-3 ${cred.email !== '' && cred.password !== '' ? '' : 'cursor-not-allowed opacity-50'}`}
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


export const UpdateProduct = ({ id, item }) => {


    const [text, setText] = React.useState(item?.description || '');
    const [fields, setFields] = React.useState({
        title: item?.title,
        description: text,
        price: item?.price,
        category: item?.category,
        stock: item?.stock,
        image: item?.images
    })

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const autoExpand = (event) => {
        const textarea = event.target;
        textarea.style.height = "1px";
        textarea.style.height = textarea.scrollHeight + "px";
        setText(textarea.value);
        setFields({
            ...fields,
            description: textarea.value
        })
    }
    const fieldChange = (e) => {
        setFields(pre => ({ ...pre, [e.target.name]: e.target.value }))
    }
    const handleClick = () => {
        dispatch(cancelProduct())
        navigate(-1)
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(updateProduct(id, fields.title, fields.description, fields.stock, fields.price, fields.category, fields.image))

    };
    const emptyField = () => {
        for (const field in fields) {
            if (fields[field] === "") {
                return true
            }
        }
        return false;
    }

    return (
        <>
            <form action="" className="inline-flex flex-col justify-center items-center my-3" onSubmit={handleSubmit}>
                <div className="flex justify-center my-1.5">
                    <div className="relative mx-1">
                        <input
                            type="text"
                            id="floating_outlined"
                            value={fields.title}
                            name="title"
                            onChange={fieldChange}
                            className="block px-2.5 pb-1 pt-3 w-96  text-gray-900 bg-transparent rounded border-2 border-blue-600 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder="" />
                        <label
                            htmlFor="floating_outlined"
                            className="absolute text-sm text-blue-600 font-medium duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:font-medium peer-focus:tracking-wide peer-focus:top-2 peer-focus:scale-90 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Product Title</label>
                    </div>
                    <div className="relative mx-1">
                        <input
                            type="text"
                            id="floating_outlined_two"
                            value={fields.category}
                            name="category"
                            onChange={fieldChange}
                            className="block px-2.5 pb-1 pt-3 w-96 text-gray-900 bg-transparent rounded border-2 border-blue-600 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder="" />
                        <label
                            htmlFor="floating_outlined_two"
                            className="absolute text-sm text-blue-600 font-medium duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-90 peer-focus:font-medium peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Add Category</label>
                    </div>
                </div>
                <div className="flex justify-center my-2">
                    <div className="relative mx-1">
                        <input
                            type="text"
                            id="floating_outlined_three"
                            value={fields.stock}
                            name="stock"
                            onChange={fieldChange}
                            className="block px-2.5 pb-1 pt-3 w-96  text-gray-900 bg-transparent rounded border-2 border-blue-600 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder="" />
                        <label
                            htmlFor="floating_outlined_three"
                            className="absolute text-sm text-blue-600 font-medium duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-90 peer-focus:tracking-wide peer-focus:font-medium peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">How many products you have in stock</label>
                    </div>
                    <div className="relative mx-1">
                        <input
                            type="text"
                            id="floating_outlined_four"
                            value={fields.price}
                            name="price"
                            onChange={fieldChange}
                            className="block px-2.5 pb-1 pt-3 w-96 text-gray-900 bg-transparent rounded border-2 border-blue-600 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder="" />
                        <label
                            htmlFor="floating_outlined_four"
                            className="absolute text-sm text-blue-600 font-medium duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-90 peer-focus:tracking-wide peer-focus:font-medium peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Product Price</label>
                    </div>
                </div>
                <div className="relative mx-1 my-2">
                    <textarea
                        type="text"
                        id="floating_outlined_five"
                        className="block px-2.5 pb-2 pt-3 w-[775px] text-gray-900 bg-transparent rounded border-2 border-blue-600 appearance-none overflow-y-hidden focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=""
                        rows="1"
                        value={text}
                        name="description"
                        onChange={autoExpand}
                    ></textarea>
                    <label
                        htmlFor="floating_outlined_five"
                        className="absolute text-sm text-blue-600 font-medium duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-90 peer-focus:font-medium peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                    >
                        Product Description
                    </label>
                </div>
                <div className="relative mx-1 my-2">
                    <input
                        type="text"
                        id="floating_outlined_six"
                        className="block px-2.5 pb-2 pt-3 w-[775px] text-gray-900 bg-transparent rounded border-2 border-blue-600 appearance-none overflow-y-hidden focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=""
                        value={fields.image}
                        name="image"
                        onChange={fieldChange}
                    ></input>
                    <label
                        htmlFor="floating_outlined_six"
                        className="absolute text-sm text-blue-600 font-medium duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-90 peer-focus:font-medium peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                    >
                        Product Image
                    </label>
                </div>
                <div className="flex justify-between w-full px-1">
                    <button type="submit" className={`text-white bg-blue-600 ${emptyField() !== true ? "cursor-pointer" : "cursor-not-allowed opacity-25"} rounded-md py-1 px-5`} >Add Product</button>
                </div>
            </form>
            <div className='flex items-end -ml-[310px] mb-4'>
                <button className="block text-blue-600 font-medium border-2 border-blue-600 rounded-md px-5" onClick={handleClick}>Cancel</button>
            </div>
        </>
    )
}