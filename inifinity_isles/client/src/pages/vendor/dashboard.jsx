import Logo from '../../../public/assets/logo';
import { Link } from 'react-router-dom';
import { FaPlus } from "react-icons/fa6";
import CardLayout from '../../layout/cardLayout';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchUserProducts } from '../../../apps/action/prodAction';


const DashboardV = () => {
  const state = useSelector(state => state.Product)
  const products = state.userProducts
  console.log(products)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUserProducts())
  }, [dispatch])
  return (
    <>
      <div>
        <Link to='/' className="inline-flex flex-col justify-center items-center text-sm font-semibold uppercase sm:text-base md:text-lg lg:text-2xl xl:text-3xl my-3 mx-[550px]"><Logo color='black' width='w-20' /><div className='mx-4 -my-2'>Infinity Isles</div></Link>
      </div>
      <div className='border border-gray-400 mx-20 my-4'></div>
      <div className='flex flex-col items-center bg-blue-200 rounded-xl border-4 border-dashed border-blue-700 p-20 mx-20'>
        <Link to='add-new-product'>
          <div className='inline-flex items-center hover:bg-blue-300 rounded-full p-2'><div className='inline-block bg-blue-700 text-white rounded-full p-1'><FaPlus className='text-xl' /></div></div>
        </Link>
        <div className='text-2xl text-blue-700 font-medium'>Add a new Product</div>
      </div>
      <div className='mx-20 my-3'>
        {products.length === 0 ? (
          <div className='flex justify-center text-4xl text-gray-300 font-medium my-20'>no product added</div>
        ) : (
          <>
            <div className='text-2xl my-5'>Recently Added Products:</div>
            <CardLayout products={products} />
          </>
        )}
      </div>
    </>
  )
}

export default DashboardV
