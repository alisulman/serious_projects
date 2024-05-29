/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'


const TopBusinessman = ({ users }) => {
    return (
        <>
            <div className='w-full'>
                <div className='flex justify-between items-center'>
                    <div className="text-3xl font-medium">Top Bussinessmen:</div>
                    <Link to='/top-vendors'>
                        {users.length >= 8 && (
                            <div className='text-lg text-blue-600 font-medium hover:underline cursor-pointer'>View All</div>
                        )}
                    </Link>
                </div>
                {users && users?.length !== 0 ? (
                    <div className='grid grid-cols-8 gap-4 lg:gap-4 xl:gap-5 my-5 '>
                        {users?.map(user =>
                            <div key={user?.user?._id} className=' w-full h-full'>
                                <div className='flex items-center justify-center  border-black rounded-full w-10 h-10 border-[1px] sm:w-12 sm:h-12 sm:border-2 md:border-[3px] md:w-16 md:h-16 lg:border-4 lg:w-24 lg:h-24 xl:w-32 xl:h-32 p-1'>
                                    <Link to={`/vendor/${user?.user?.username}/${user?.user?._id}`}><div className={`flex items-center justify-center uppercase rounded-full w-8 h-8 text-xl sm:text-2xl sm:w-10 sm:h-10 md:text-3xl md:w-12 md:h-12 lg:text-4xl lg:w-20 lg:h-20 xl:text-5xl xl:w-28 xl:h-28`} style={{ color: user?.user?.colors[0].textColor, backgroundColor: user?.user?.colors[0].hex }}>{user?.user.email.slice(0, 1)}</div></Link>
                                </div>
                            </div>
                        )}
                    </div>
                ) : (
                    <div className='flex justify-center items-center my-5'>
                        <div className='text-4xl text-gray-300 font-medium'>No Businessmen here</div>
                    </div>
                )}
            </div>
        </>
    )
}

export default TopBusinessman
