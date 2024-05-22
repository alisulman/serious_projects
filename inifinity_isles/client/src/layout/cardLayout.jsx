/* eslint-disable react/prop-types */

import { useSelector } from 'react-redux'
import CardTwo from '../component/cards/cardTwo'

const CardLayout = ({ products }) => {
    const state = useSelector(state => state.Product)
    const isLoading = state.isLoading
    return (
        <>
            {isLoading ? (
                <div>loading ...</div>
            ) : (
                <div className='grid grid-cols-3 gap-5'>
                    {
                        products?.map(product => (
                            <CardTwo
                                key={product._id}
                                product={product}
                            />
                        ))
                    }
                </div>
            )}
        </>
    )
}
export default CardLayout


