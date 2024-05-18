/* eslint-disable react/prop-types */

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CardFive = ({ category }) => {

  const state = useSelector(state => state.Product)
  const products = state.products
  const newProductsOne = products.filter(prod => prod.category.category === category.category);
  console.log(newProductsOne)
  return (
    <>
      <div className="relative w-60 h-80">
        <div className="w-60 h-80">
          <Link to={`/all-categories/${category.category}/${category._id}`}><img src={newProductsOne[1]?.images} className="w-full h-full object-cover hover:scale-110" /></Link>
        </div>
      </div>
    </>
  )
}

export default CardFive
