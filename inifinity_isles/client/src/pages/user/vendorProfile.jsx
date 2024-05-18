import { useParams } from 'react-router-dom'
import Header from '../../component/header'
import Navbar from '../../component/navbar'
import { useDispatch, useSelector } from 'react-redux'
import { FaStar } from 'react-icons/fa'
import { AiFillLike } from "react-icons/ai";
import IsNew from '../../sideFunction/forNew'
import CardOne from '../../component/cards/cardOne'
import { useEffect } from 'react'
import { fetchTopUserProducts } from '../../../apps/action/prodAction'

const VendorProfile = () => {
    const { name } = useParams()
    const { id } = useParams()
    const state = useSelector(state => state.User)
    const stateT = useSelector(state => state.Product)
    const existUser = state?.users
    const products = stateT.userTopProducts
    const user = existUser?.find(user => user.username === name);
    const dispatch = useDispatch()

    const dateObj = new Date(user.createdAt);
    const year = dateObj.getFullYear();
    const month = ('0' + (dateObj.getMonth() + 1)).slice(-2);
    const day = ('0' + dateObj.getDate()).slice(-2);
    const formattedDate = `${day}-${month}-${year}`;

    useEffect(() => {
        dispatch(fetchTopUserProducts(id))
    }, [dispatch, id])

    const data = <IsNew dater={user.createdAt} />
    console.log(data)
    return (
        <>
            <Header />
            <Navbar />
            <div className='m-10'>
                <div className='flex '>
                    <div className='flex flex-col items-center'>
                        <div className={`flex items-center justify-center text-8xl uppercase rounded-full w-40 h-40 my-5`} style={{ color: user.colors[0].textColor, backgroundColor: user.colors[0].hex }}>{user.email.slice(0, 1)}</div>
                        <div className='flex justify-center items-center gap-1 text-sm bg-gray-200 hover:bg-gray-300 border-2 border-gray-400 rounded-[4px] w-full'>
                            <div>Like</div>
                            <div><AiFillLike style={{ color: user.colors[0].hex }} /></div>
                        </div>
                        <div className='group/item flex flex-col items-center my-2 text-sm bg-gray-200 hover:bg-gray-300 border-2 border-gray-400 rounded-[4px] px-4 py-1'>
                            <div className='py-1'>Gave him/her rating</div>
                            <div className='flex items-center gap-1 mb-1'>
                                <FaStar className='text-gray-300 hover:scale-150 group-hover/item:text-yellow-200' />
                                <FaStar className='text-gray-300 hover:scale-150 group-hover/item:text-yellow-200' />
                                <FaStar className='text-gray-300 hover:scale-150 group-hover/item:text-yellow-200' />
                                <FaStar className='text-gray-300 hover:scale-150 group-hover/item:text-yellow-200' />
                                <FaStar className='text-gray-300 hover:scale-150 group-hover/item:text-yellow-200' />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col items-end p-10 mt-5'>
                        <div>
                            <div className='inline-block relative text-3xl uppercase font-medium tracking-wider'><div>{name}</div><div className={`absolute -top-1 -right-6 flex items-center  text-[10px] font-bold rounded-full h-4 px-2 ${!data.key === null&&'hidden'}`} style={{ color: user.colors[0].textColor, backgroundColor: user.colors[0].hex }}><IsNew dater={user.createdAt} /></div></div>
                            <div className='text-sm text-justify'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit mollitia rerum harum odio eveniet id et, cumque delectus alias. Quod quia nisi tenetur rem obcaecati animi autem fugiat quae blanditiis deserunt! Ut, unde? Odio dicta pariatur magni sint ad exercitationem officia explicabo, voluptate quasi, tempore, blanditiis cupiditate nihil numquam similique id eaque eveniet aperiam amet illo doloremque facilis deleniti debitis! Molestias eos cum repudiandae eveniet placeat veritatis facilis dolor doloremque quis eaque tenetur provident voluptatibus earum consequuntur libero quas at recusandae temporibus, sequi reiciendis porro sint ratione! Totam molestias magni quas at hic alias ut, non ipsam quasi. Eum, fugit.</div>
                        </div>
                        <div className='text-sm font-medium leading-4 mt-14'>
                            <div>Join Date:</div>
                            <div>{formattedDate}</div>
                        </div>
                    </div>
                </div>
                <div className='border-b-2 border-gray-200'></div>
                {products.length === 0 ? (
                    <div className='flex justify-center text-3xl text-gray-300 font-medium my-5'>
                        no product is reach at top rate
                    </div>
                ) : (
                    <>
                        <div className='text-3xl font-medium'>Top Rating Products:</div>
                        <div className='grid grid-cols-4 gap-5 my-5'>
                            {products?.map(product => (
                                <CardOne key={product._id} product={product} />
                            ))}
                        </div>
                    </>
                )
                }
                <div className='border-b-2 border-gray-200'></div>
            </div >
        </>
    )
}

export default VendorProfile
