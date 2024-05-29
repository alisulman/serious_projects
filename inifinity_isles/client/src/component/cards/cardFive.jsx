/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CardFive = ({ category }) => {
  const [newProd, setNewProd] = useState([])

  const state = useSelector(state => state.Product)
  const products = state.products
  useEffect(() => {
    const newProductsOne = products.filter(prod => prod.category.category === category.category);
    setNewProd(newProductsOne)
  }, [category.category, products])
  return (
    <>
      <div className="relative w-60 h-80">
        <div className="w-60 h-80">
          {newProd.length > 0 && (
            <Link to={`/all-categories/${category.category}/${category._id}`}>
              <div className="relative h-80">
                <img src={newProd[0]?.images} className="w-full h-full object-cover hover:scale-110" />
                <div className="absolute bottom-0 capitalize text-xl font-medium tracking-wider text-center bg-white bg-opacity-70 w-full">{category.category}</div>
              </div>
            </Link>
          )}
        </div>
      </div>
    </>
  )
}

export default CardFive
