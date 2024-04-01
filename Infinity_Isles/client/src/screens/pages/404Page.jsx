// import React from 'react'
import { useNavigate } from 'react-router-dom'

const Page404 = () => {
    let navigate = useNavigate()

    return (
        <>
            <div className="flex flex-col justify-center items-center h-screen">
                <div className="text-6xl font-bold">404</div>
                <div className="text-4xl">Oops! page not Found</div>
                <button className="text-2xl text-white font-medium bg-gray-900 rounded-xl p-2 px-6 my-4 hover:bg-black hover:rounded-md" onClick={() => navigate(-1)}>Go Back to Page</button>
            </div>
        </>
    )
}

export default Page404
