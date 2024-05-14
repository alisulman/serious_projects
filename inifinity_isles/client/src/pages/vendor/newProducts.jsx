import { Link } from 'react-router-dom'
import Logo from '../../../public/assets/logo';
import { AddnewProduct } from '../../component/form';

const NewProducts = () => {
    return (
        <>
            <div>
                <Link to='/' className="flex flex-col items-center text-sm font-semibold uppercase sm:text-base md:text-lg lg:text-2xl xl:text-3xl my-3"><Logo color='black' /><div className='mx-4 -my-2'>Infinity Isles</div></Link>
            </div>
      <div className='border border-gray-400 mx-20 my-4'></div>
      <div className='text-2xl font-medium mx-20 my-4'>Add a Product:</div>
      <div>
        <AddnewProduct />
      </div>

        </>
    )
}

export default NewProducts