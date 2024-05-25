import { useDispatch, useSelector } from "react-redux"
import CardSix from "../../component/cards/cardSix"
import { useEffect } from "react"
import { FetchFav } from "../../../apps/action/cartAction"

const FavouritePage = () => {
    const state = useSelector(state => state.Cart)
    const favourite = state.isFavourite

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(FetchFav())
    }, [dispatch])

    return (
        <>
            <div className="my-5">
                <div className="text-3xl font-medium">All Your Favourites:</div>
                <div className="grid grid-cols-6 gap-5">
                    {favourite?.map(item => (
                        <CardSix key={item?._id} item={item} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default FavouritePage
