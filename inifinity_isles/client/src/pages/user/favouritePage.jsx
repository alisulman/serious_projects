import {useSelector } from "react-redux"
import CardSix from "../../component/cards/cardSix"

const FavouritePage = () => {
    const state = useSelector(state => state.Cart)
    const favourite = state.isFavourite


    return (
        <>
            <div className="my-5">
                <div className="text-3xl font-medium" id="favouriteProducts">All Your Favourites:</div>
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
