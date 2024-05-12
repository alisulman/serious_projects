import { Link, useParams } from 'react-router-dom'
import Logo from '../../../public/assets/logo';
import { UpdateProduct } from '../../component/form';
import { useEffect } from 'react';
import { fetchSingleProduct } from '../../../apps/action/prodAction';
import { useDispatch, useSelector } from 'react-redux';
import { CardOne } from '../../component/card';
const EditProduct = () => {
    const { productId } = useParams()
    const dispatch = useDispatch()

    const state = useSelector(state => state.Product)
    const product = state.product
    const loading = state.isLoading

    useEffect(() => {
        dispatch((fetchSingleProduct(productId)))
    }, [dispatch, productId])

    return (
        <>
            {loading ? (
                <div>loading...</div>
            ) : (
                <>
                    <div>
                        <Link to='/' className="flex flex-col items-center text-sm font-semibold uppercase sm:text-base md:text-lg lg:text-2xl xl:text-3xl my-3"><Logo color='black' /><div className='mx-4 -my-2'>Infinity Isles</div></Link >
                    </div >
                    <div className='border border-gray-400 mx-20 my-4'></div>
                    <div className='text-2xl font-medium mx-20 my-4'>Add a Product:</div>
                    <div className='flex justify-between mx-20'>
                        <UpdateProduct id={productId} item={product} />
                        <CardOne product={product} />
                    </div>
                </>
            )}

        </>
    )
}

export default EditProduct
