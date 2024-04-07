/* eslint-disable no-unused-vars */

import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../app/actions/productAction'

const Pagination = () => {

    const dispatch = useDispatch()
    const state = useSelector(state => state.product)
    const page = state.pagination

    const handleCLick = (page) => {
        dispatch(fetchProducts(page))
        localStorage.setItem("currentPage", page)
    }
    return (
        <>
            <div className='flex flex-row gap-5 my-5 cursor-pointer text-xs font-semibold'>
                <button
                    type='button'
                    className={`flex items-center bg-gray-300 border border-gray-700 rounded-s-lg py-1 px-4  ${page.currentPage === 1 ? "opacity-50" : "opacity-100 hover:bg-gray-700 hover:text-gray-300"}`}
                    onClick={() => handleCLick(page.currentPage - 1)}
                    disabled={page.currentPage === 1}
                >
                    <svg className="w-3.5 h-3.5 me-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5H1m0 0 4 4M1 5l4-4" />
                    </svg>
                    Previous
                </button>
                {Array.from(Array(page.totalPages), (e, i) => {
                    return (
                        <div key={i} className={`${page.currentPage === i + 1 ? "bg-gray-700 text-gray-300" : "bg-gray-300"} border border-gray-700 py-1 px-4 hover:bg-gray-700 hover:text-gray-300`} onClick={() => handleCLick(i + 1)}>
                            {i + 1}
                        </div>
                    )
                })}
                <button
                    type='button'
                    className={`flex items-center bg-gray-300 border border-gray-700 rounded-e-lg py-1 px-4  ${page.currentPage === page.totalPages ? "opacity-50" : "opacity-100 hover:bg-gray-700 hover:text-gray-300"}`}
                    onClick={() => handleCLick(page.currentPage + 1)}
                    disabled={page.currentPage === page.totalPages}
                >
                    <span>Next</span>
                    <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </button>
            </div>
        </>
    )
}

export default Pagination
