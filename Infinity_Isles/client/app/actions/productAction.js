import { setError, setLoading, setProducts, setPagination } from '../slices/productSlice'
import axios from 'axios'

export const fetchProducts = (page) => async (dispatch) => {
    dispatch(setLoading())
    try {
        const response = await axios.get(`http://localhost:4000/api/products/page-${page}/products-${8}`)
        const {products, pagination} = response.data
        dispatch(setProducts(products))
        dispatch(setPagination(pagination))
    } catch (error) {
        dispatch(setError(
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message
                    ? error.message
                    : "Internal server problem please try again later"
        ))
    }
}