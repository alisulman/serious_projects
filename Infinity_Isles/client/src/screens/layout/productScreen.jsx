/* eslint-disable no-unused-vars */

import * as React from 'react'
import Card from '../../components/Cards'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../../app/actions/productAction'
import Pagination from '../../components/pagination'

const ProductScreen = () => {
    const dispatch = useDispatch()
    const state = useSelector(state => state.product)
    const data = state.products

    React.useEffect(() => {
        const currentPage = localStorage.getItem('currentPage');
        if (currentPage) {
            dispatch(fetchProducts(parseInt(currentPage)))
        } else {
            dispatch(fetchProducts(1))
        }
    }, [dispatch])

    if (state.isLoading) {
        return <div>Loading...</div>
    }

    return (
        <div className='flex flex-col justify-center items-center'>
            <div className='text-4xl font-medium my-8'>Products</div>
            <Pagination />
            <div className='grid grid-cols-4 gap-5 my-5'>
                {data && data.map(product => (
                    <Card key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}

export default ProductScreen
