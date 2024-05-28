import Logo from '../../../public/assets/logo';
import { Link } from 'react-router-dom';
import { FaPlus } from "react-icons/fa6";
import CardLayout from '../../layout/cardLayout';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchUserProducts } from '../../../apps/action/prodAction';
import Footer from '../../component/footer';
import SEO_Comp from '../../component/SEO';


const DashboardV = () => {
  const state = useSelector(state => state.Product)
  const products = state.userProducts

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUserProducts())
  }, [dispatch])
  return (
    <>
    <SEO_Comp title='Dashboard/Vendor'/>
      <div className='flex justify-center'>
        <Link to='/' className="flex items-center gap-3 mt-2">
          <Logo color='black' style='w-7 sm:w-8 md:w-10 lg:w-12 xl:w-16 mt-1' />
          <div className='lg:text-2xl xl:text-3xl'>Infinity Isles</div>
        </Link>
      </div>
      <div className='border border-gray-400 mx-20 mt-1 mb-3'></div>
      <div className='flex flex-col items-center bg-blue-200 rounded-xl border-2 sm:border-4 border-dashed border-blue-700 p-10 sm:p-12 md:p-14 lg:p-16 xl:p-20 mx-20'>
        <Link to='add-new-product'>
          <div className='inline-flex items-center hover:bg-blue-300 rounded-full p-2'><div className='inline-block bg-blue-700 text-white rounded-full p-1'><FaPlus className='text-xl' /></div></div>
        </Link>
        <div className=' text-blue-700 font-medium lg:text-xl xl:text-2xl'>Add a new Product</div>
      </div>
      <div className='mx-20 my-3'>
        {products.length === 0 ? (
          <div className='flex justify-center text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-gray-300 font-medium my-20'>no product added</div>
        ) : (
          <>
            <div className='lg:text-xl xl:text-2xl my-5'>Recently Added Products:</div>
            <CardLayout products={products} />
          </>
        )}
      </div>
      <div className='my-5'></div>
      <Footer />
    </>
  )
}

export default DashboardV
