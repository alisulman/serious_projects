import { Link } from 'react-router-dom'
import client_1 from '../../../public/assets/client_1.jpg'
import client_2 from '../../../public/assets/client_2.jpg'
import client_3 from '../../../public/assets/client_3.jpg'
import client_4 from '../../../public/assets/client_4.jpg'
import client_5 from '../../../public/assets/girl_1.jpg'
import client_6 from '../../../public/assets/girl_2.jpg'
import client_7 from '../../../public/assets/girl_3.jpg'


const TopBusinessman = () => {
    const images = [client_1, client_2, client_3, client_4, client_5, client_6, client_7]
    console.log(images)
    return (
        <>
            <div>
                <div className='flex justify-between items-center'>
                    <div className="text-3xl font-medium">Top Bussinessmen:</div>
                    <Link to='/top-vendors'>
                        <div className='text-lg text-blue-600 font-medium hover:underline cursor-pointer'>View All</div>
                    </Link>
                </div>
                <div className='flex gap-10 my-5'>
                    {images&&images.map((item, index) => (
                        <div key={index} className='border-4 border-black w-full h-full rounded-full p-2'><img src={item} className='rounded-full xl:w-36 xl:h-[116px] object-cover object-top' /></div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default TopBusinessman
