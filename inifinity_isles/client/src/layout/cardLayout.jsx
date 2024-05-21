/* eslint-disable react/prop-types */

import CardTwo from '../component/cards/cardTwo'

const CardLayout = ({ products }) => {

    return (
        <>
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
        </>
    )
}
export default CardLayout


