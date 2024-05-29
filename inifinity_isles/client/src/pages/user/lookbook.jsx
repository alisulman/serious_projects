import { useState } from "react"
import Header from "../../component/header"
import '../../styleOne.css'

const Lookbook = () => {
    const [classLog, setClassLog] = useState('')
    const handleMan = () => {
        setClassLog('menClass')
    }
    const handleWoman = () => {
        setClassLog('womenClass')
    }
    const handleLookbook = () => {
        setClassLog('lookbookClass')
    }
    return (
        <>
            <Header />
            <div className={`relative w-full h-full grandFather ${classLog}`}>
                <div className="bg-red-500 w-full h-[45vh] p-3 sonOne">
                    <div className={`flex justify-center text-sm text-white font-medium bg-black rounded-full w-28 py-0.5 mx-auto hover:bg-opacity-50`} onClick={handleLookbook}>LookBook</div>
                </div>
                <div className="flex sonTwo">
                    <div className="bg-blue-600 w-1/2 h-[45vh] p-3 grandSonOne">
                        <div className={`flex justify-center text-sm text-white font-medium bg-black rounded-full w-28 py-0.5 mx-auto hover:bg-opacity-50`} onClick={handleMan}>Men</div>
                    </div>
                    <div className="bg-purple-600 w-1/2 h-[45vh] p-3 grandSonTwo">
                        <div className={`flex justify-center text-sm text-white font-medium bg-black rounded-full w-28 py-0.5 mx-auto hover:bg-opacity-50`} onClick={handleWoman}>Women</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Lookbook
