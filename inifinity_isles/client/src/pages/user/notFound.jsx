// import React from 'react'
import { useNavigate } from 'react-router-dom'
import SEO_Comp from '../../component/SEO'

const Page404 = () => {
    let navigate = useNavigate()

    return (
        <>
            <SEO_Comp title='Page not Found' description='Ecommerace Online Store' keywords='Shopping, Ecommerce Store' author='Ali Sulman' />
            <div className="flex flex-col justify-center items-center h-screen cursor-pointer">
                <div className="text-6xl font-bold">404</div>
                <div className="text-4xl">Oops! page not Found</div>
                <button className="text-2xl text-white font-medium bg-gray-900 rounded-xl py-2 px-6 mt-4 hover:bg-black hover:rounded-md" onClick={() => navigate(-1)}>Go Back to Page</button>
            </div>
        </>
    )
}

export default Page404