import { Link } from 'react-router-dom'
import Logo from '../../../public/assets/logo';
import FormOne from '../../component/form/formOne';
import SEO_Comp from '../../component/SEO';

const NewProducts = () => {
    return (
        <>
        <SEO_Comp title='Add new product' />
            <div>
                <Link to='/' className="flex items-center justify-center text-sm font-semibold uppercase sm:text-base md:text-lg lg:text-2xl xl:text-3xl mt-3"><Logo color='black' width='w-8 sm:w-10 md:w-12 lg:w-16 xl:w-20' /><div className='mx-4 -my-2'>Infinity Isles</div></Link>
            </div>
      <div className='border border-gray-400 mx-20 '></div>
      <div className='md:text-xl lg:text-2xl font-medium mx-20 my-4'>Add a Product:</div>
      <div>
        <FormOne />
      </div>

        </>
    )
}

export default NewProducts
