/* eslint-disable react/prop-types */
import { useEffect } from 'react'
import { CardOne, CardTwo } from '../component/card'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserProducts } from '../../apps/action/prodAction'
import CardThree from '../component/cards/cardThree'

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

export const CardAllLayout = ({ products }) => {

    return (
        <>
            <div className='flex justify-center my-10'>
                <div className='grid grid-cols-4 gap-10'>
                    {products && products.map(product => (
                        <CardTwo key={product._id} product={product} />
                    ))}
                </div>
            </div>
        </>
    )
}

export const CardCartLayout = ({ product }) => {
    console.log(product)
    return (
        <>
            <div className='flex justify-center my-10'>
                <div className='grid grid-cols-4 gap-10'>
                    {product && product.map(product => (
                        <CardThree key={product._id} product={product} />
                    ))}
                </div>
            </div>
        </>
    )
}
