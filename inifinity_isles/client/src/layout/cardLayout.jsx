/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import { CardOne } from '../component/card'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserProducts } from '../../apps/action/prodAction'

const CardLayout = () => {

    const state = useSelector(state => state.Product)
    const products = state.userProducts

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUserProducts())
    }, [dispatch])

    return (
        <>
            {products.length === 0 ? (
                <div>Hello</div>
            ) : (
                <div className='grid grid-cols-5 gap-10'>
                    {
                        products.map(product => (
                            <CardOne key={product._id} product={product} />
                        ))
                    }
                </div>
            )}
        </>
    )
}

export default CardLayout
