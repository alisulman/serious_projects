import { useSelector } from "react-redux"
import CardSix from "../../component/cards/cardSix"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const FavouritePage = () => {

    const state = useSelector(state => state.Cart)
    const favourite = state.isFavourite

  

    return (
        <>
            <div className="relative my-5">
                <div className="text-3xl font-medium" id="favouriteProducts">All Your Favourites:</div>
                <div className="w-[84%] h-[300px] overflow-hidden">
                    <div className="grid grid-cols-6  lg:gap-4 xl:gap-5 lg:w-[1000px] xl:w-[1190px]">
                        {favourite?.map(item => (
                            <CardSix key={item?._id} item={item} />
                        ))}
                    </div>
                </div>
                {favourite.length > 5 && (
                    <div className="absolute top-[57px] right-0 border-2 border-gray-400 lg:w-40 lg:h-60 xl:w-44 xl:h-64 rounded-xl">
                        <div className="flex justify-center items-center h-full"><ArrowForwardIosIcon
                            sx={{
                                fontSize: 30,
                                backgroundColor: "#E0E0E0",
                                padding: '10px',
                                borderRadius: '50%',
                            }}
                        /></div>
                    </div>
                )
                }
            </div>
        </>
    )
}

export default FavouritePage
