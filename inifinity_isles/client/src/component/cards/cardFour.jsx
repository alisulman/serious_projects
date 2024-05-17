/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'

const CardFour = ({ category, products }) => {
    const newProductsOne = products.filter(prod => prod.category.category === category.category);
    return (
        <>
            <Link to={`/${category.category}`}>
                <div className="flex flex-col items-center cursor-pointer">
                    <div className="flex justify-between w-96 h-72 rounded-xl overflow-hidden">
                        <div className="w-56 h-full mr-2">
                            <img src={newProductsOne[0].images || "https://img.freepik.com/free-photo/abstract-surface-textures-white-concrete-stone-wall_74190-8189.jpg"} className="object-cover w-full h-full" />
                        </div>
                        <div className="grid grid-rows-2 gap-1 w-40 h-full">
                            <img src={newProductsOne[1]?.images || 'https://img.freepik.com/free-photo/abstract-surface-textures-white-concrete-stone-wall_74190-8189.jpg'} className="object-cover w-full h-full" />
                            <img src={newProductsOne[2]?.images || 'https://img.freepik.com/free-photo/abstract-surface-textures-white-concrete-stone-wall_74190-8189.jpg'} className="object-cover w-full h-full" />
                        </div>
                    </div>
                    <div className="uppercase text-sm font-bold tracking-widest mt-4">{category.category}</div>
                </div>
            </Link>
        </>
    )
}

export default CardFour
