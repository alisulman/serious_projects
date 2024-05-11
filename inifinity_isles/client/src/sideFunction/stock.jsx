/* eslint-disable react/prop-types */

const Stock = ({ stock }) => {

    return (
        stock > 15 ? (
            <div>In Stock</div>
        ) : stock <= 15 && stock > 10 ? (
            <div>Limited Stock</div>
        ) : stock <= 10 && stock > 0 ? (
            <div>Only {stock} left</div>
        ) : stock == 0 ? (
            <div>Sold Out</div>
        ) : null
    )
}

export default Stock