import { Route, Routes } from "react-router-dom"
import RegistrationScreens from "./layout/authentication/registration"
import HomeScrn from "./pages/user/homeScreeen"
import Page404 from "./pages/user/notFound"
import ManageAccount from "./pages/user/manageAccount"
import { CheckRole, PrivateRoute } from "./layout/router/privateRoute"
import DashboardP from "./pages/purchaser/dashboard"
import DashboardV from "./pages/vendor/dashboard"
import NewProducts from "./pages/vendor/newProducts"
import { useSelector } from "react-redux"
import EditProduct from "./pages/vendor/updateProduct"
import CartBasket from "./pages/user/CartBasket"
import AllProducts from "./pages/user/allProducts"
import VendorProfile from "./pages/user/vendorProfile"
import CategoryPage from "./pages/user/categoryPage"
import Category from "./pages/user/category"
import SingleProduct from "./pages/user/singleProduct"

function App() {

  const state = useSelector(state => state.User);
  const user = state.isAuth;
  const role = user?.data?.role;
  if(!user?.token){
    localStorage.removeItem('cart')
    localStorage.removeItem('totalQty ')
  }
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeScrn />} />
        <Route path="/authenctication/registeration" element={<RegistrationScreens />} />
        <Route path="/*" element={<Page404 />} />
        <Route path="/checkout/:cName" element={<CartBasket />} />
        <Route path="/all-products" element={<AllProducts />} />
        <Route path="/vendor/:name/:id" element={<VendorProfile />} />
        <Route path="/all-categories/:category/:cpid" element={<CategoryPage />} />
        <Route path="/all-categories" element={<Category />} />
        <Route path="/all-categories/:category/:categoryId/:productId" element={<SingleProduct />} />

        <Route path="/dashboard/" element={<CheckRole />}>
          <Route path="purchaser" element={<DashboardP />} />
          <Route path="vendor/" element={<DashboardV />}>
          </Route>
        </Route>

        <Route path="/profile" element={<PrivateRoute />} >
          <Route path="" element={<ManageAccount />} />
        </Route>

        {role === 'seller' && (
          <>
            <Route path="/dashboard/vendor/add-new-product" element={<NewProducts />} />
            <Route path="/dashboard/vendor/update-product/:category/:productId" element={<EditProduct />} />
          </>
        )}
      </Routes>

    </>
  )
}

export default App
