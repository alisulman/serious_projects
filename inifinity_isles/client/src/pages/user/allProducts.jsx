import CardOne from "../../component/cards/xardOne"
import Header from "../../component/header"
import Navbar from "../../component/navbar"

const AllProducts = () => {
  return (
    <>
        <Header /> 
        <Navbar />
        <div className="flex justify-center text-3xl font-medium my-5">Lookbook</div>
        <div className="flex justify-between mx-32">
          <CardOne />
        </div>
    </>
  )
}

export default AllProducts
