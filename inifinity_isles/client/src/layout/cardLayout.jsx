/* eslint-disable react/prop-types */

import CardTwo from '../component/cards/cardTwo'

const CardLayout = ({ products }) => {
    console.log(products)

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

// export const CardAllLayout = ({ products }) => {

//     return (
//         <>
//             <div className='flex justify-center my-10'>
//                 <div className='grid grid-cols-4 gap-10'>
//                     {products && products.map(product => (
//                         <CardTwo key={product._id} product={product} />
//                     ))}
//                 </div>
//             </div>
//         </>
//     )
// }

// export const CardCartLayout = ({ product }) => {
//     console.log(product)
//     return (
//         <>
//             <div className='flex justify-center my-10'>
//                 <div className='grid grid-cols-4 gap-10'>
//                     {product && product.map(product => (
//                         <CardThree key={product._id} product={product} />
//                     ))}
//                 </div>
//             </div>
//         </>
//     )
// }
