import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { createProduct, fetchAllCategories } from "../../../apps/action/prodAction";
// import { FaEdit } from "react-icons/fa";
import CropEditor from "../Editor/cropper";
import AddCloud from "../../sideFunction/addCloud";

const FormOne = () => {
    const [text, setText] = useState("");
    const [url, setUrl] = useState('');
    const [cate, setCate] = useState('');
    const [drag, setDrag] = useState(false);
    const [show, setShow] = useState(true);
    const [showEditor, setShowEditor] = useState(false)
    const [fields, setFields] = useState({
        title: '',
        description: '',
        price: '',
        category: '',
        stock: '',
        image: ''
    })

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const inputRef = useRef(null)

    const state = useSelector(state => state.Product)

    useEffect(() => {
        // setFields(prevFields => ({ ...prevFields, image: newImage }));
        setFields(prevFields => ({ ...prevFields, image: url }));
        dispatch(fetchAllCategories())
    }, [url, dispatch]);

    const fieldChange = (e) => {
        setFields(pre => ({ ...pre, [e.target.name]: e.target.value }))
    }
    const handleClick = () => {
        navigate(-1)
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(createProduct(fields.title, fields.description, fields.stock, fields.price, fields.category, url))
        navigate('/dashboard/vendor')
    };
    const emptyField = () => {
        for (const field in fields) {
            if (fields[field] === "") {
                return true
            }
        }
        return false;
    }
    const handleRef = () => {
        inputRef.current.click()
    }
    const handleChange = (e) => {
        const reader = new FileReader()
        reader.readAsDataURL(e.target.files[0])
        reader.onload = async () => {
            const imageUrl = await AddCloud(reader.result)
            setUrl(imageUrl)
        }
    }
    const handleOnDragOver = (e) => {
        e.preventDefault()
        setDrag(true)
        setShow(false)
    }
    const handleOnDragLeave = (e) => {
        e.preventDefault()
        setDrag(false)
        setShow(true)
    }
    const handleOnDrop = (e) => {
        e.preventDefault()
        setDrag(false)
        const file = e.dataTransfer.files[0]
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = async() => {
            const imageUrl = await AddCloud(reader.result)
            setUrl(imageUrl)
        }
        setShow(true)
    }
    const handleCancel = () => {
        setUrl(false)
        setShow(true)
    }
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
    const handleCate = () => {
        console.log('ok')
    }
    console.log(cate)

    return (
        <>
            <div className="flex justify-between w-11/12 mx-auto">
                <form action="" className="inline-flex flex-col justify-center items-center my-3 mx-5" onSubmit={handleSubmit}>
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
                                className="absolute text-sm text-blue-600 font-medium duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#EEEEEE] px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:font-medium peer-focus:tracking-wide peer-focus:top-2 peer-focus:scale-90 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Product Title</label>
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
                                className="absolute text-sm text-blue-600 font-medium duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#EEEEEE] px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-90 peer-focus:font-medium peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Add Category</label>
                            {state.category.length !== 0 ? (
                                <div className={`hidden absolute -top-0.5 -right-[85%] grid-cols-2 gap-4 bg-white border border-gray-200 bg-opacity-75 rounded-lg p-4 z-50 peer-focus:grid`}>
                                    {state?.category?.map(cate => (
                                        <button
                                            key={cate._id}
                                            className="text-left text-sm font-medium tracking-wide hover:bg-gray-100 px-2 py-1 rounded-md cursor-pointer"
                                            onClick={handleCate}
                                        >
                                            {cate?.category}
                                        </button>
                                    ))}
                                </div>
                            ) : null}
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
                                className="absolute text-sm text-blue-600 font-medium duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#EEEEEE] px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-90 peer-focus:tracking-wide peer-focus:font-medium peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">How many products you have in stock</label>
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
                                className="absolute text-sm text-blue-600 font-medium duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#EEEEEE] px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-90 peer-focus:tracking-wide peer-focus:font-medium peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Product Price</label>
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
                            className="absolute text-sm text-blue-600 font-medium duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#EEEEEE] px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-90 peer-focus:font-medium peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                        >
                            Product Description
                        </label>
                    </div>
                    <div className="relative mx-1 my-2 hidden">
                        <input
                            type="text"
                            id="floating_outlined_six"
                            className="block px-2.5 pb-2 pt-3 w-[775px] text-gray-900 bg-transparent rounded border-2 border-blue-600 appearance-none overflow-y-hidden focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=""
                            value={fields.image}
                            name="image"
                            onChange={fieldChange}
                        />
                        <label
                            htmlFor="floating_outlined_six"
                            className="absolute text-sm text-blue-600 font-medium duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-gray-200 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-90 peer-focus:font-medium peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                        >
                            Product Image
                        </label>
                    </div>
                    <div onDragOver={handleOnDragOver} onDragLeave={handleOnDragLeave} onDrop={handleOnDrop} className={`${url && 'hidden'} flex flex-col items-center border-[3px] border-dashed ${drag && 'bg-blue-300'} border-blue-600 rounded-xl cursor-pointer py-2 px-5 m-3 w-full h-32`}>
                        {show ? (
                            <>
                                <div className="text-2xl text-blue-600 font-medium">Drag or Drop Image</div>
                                <div className="text-blue-600 font-medium">or</div>
                                <div><input type="file" accept="images/*" ref={inputRef} onChange={handleChange} className="hidden" /></div>
                                <div className="bg-blue-600 hover:bg-blue-800 text-white py-0.5 px-4 my-2" onClick={handleRef}>Browse</div>
                            </>
                        ) : (
                            <div className="flex justify-center items-center my-auto text-2xl text-blue-600 font-medium">Drop Image Here</div>
                        )}
                    </div>

                    <div className="flex justify-between w-full px-1">
                        <button type="submit" className={` text-white bg-blue-600 ${!emptyField() ? "cursor-pointer" : "cursor-not-allowed opacity-25"} rounded-md py-1 px-5`} disabled={emptyField()} >Add Product</button>
                        {/* <div className={`${url && 'hidden'} text-sm text-red-600 font-medium`}>Before add product first check and then upload image.Be careful during uploading.</div> */}
                        <button className="block text-blue-600 font-medium border-2 border-blue-600 rounded-md px-5" onClick={handleClick}>Cancel</button>
                    </div>
                </form>
                <div className="flex justify-center items-center mx-20 -mt-16">
                    {!url ? (
                        <div className="text-2xl text-gray-300 font-bold tracking-widest w-full">no preview here</div>
                    ) : (
                        <div className="relative flex flex-col items-center mx-20">
                            <div className="text-3xl font-medium">Preview</div>
                            <div className="relative object-cover overflow-hidden border-2 border-black w-40 h-60 my-5">
                                <img src={url} className="w-40 h-60" />
                            </div>
                            {/* <div className="absolute top-10 -right-5 bg-gray-200 border-2 border-gray-500 p-2 rounded-full" onClick={handleEdit}><FaEdit className="text-xl text-gray-500" /></div> */}
                            <div className="flex justify-between w-full">
                                {/* <div className="bg-gray-600 hover:bg-gray-800 text-white rounded px-3 py-0.5" onClick={handleSaveImage}>Upload</div> */}
                                <div className="text-center  bg-gray-600 hover:bg-gray-800 text-white rounded w-full px-3 py-0.5" onClick={handleCancel}>Cancel</div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <CropEditor url={url} setUrl={setUrl} showEditor={showEditor} setShowEditor={setShowEditor} />
        </>
    )
}

export default FormOne