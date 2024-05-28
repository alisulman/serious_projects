import { useEffect, useState } from "react"
import CardOne from "../../component/cards/cardOne"
import { useDispatch, useSelector } from "react-redux"
import { fetchShuffleProds } from "../../../apps/action/prodAction"
import { Pagination, Stack } from "@mui/material"

const MayLikeProd = () => {
    const [page, setPage] = useState(1)
    const state = useSelector(state => state.Product)
    const products = state?.ShuffleProducts

    const dispatch = useDispatch()

    const handleChange = (event, value) => {
        setPage(value)
    }

    useEffect(() => {
        const limit = 8
        dispatch(fetchShuffleProds(page, limit))
    }, [dispatch, page])
    return (
        <>
            <div className="relative grid grid-cols-5 gap-10">
                {products?.data?.map(item => (
                    <CardOne key={item._id} product={item} whStyle='w-52 h-72' />
                ))}
                <div className="absolute bottom-0 right-0 inline-flex justify-center items-end w-96">
                    <Stack>
                        <Pagination count={products.totalPages} page={page} onChange={handleChange} size="medium" variant="outlined" />
                    </Stack>
                </div>
            </div>
        </>
    )
}

export default MayLikeProd
