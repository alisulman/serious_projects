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
import Private from "./private"

function App() {

  const state = useSelector(state => state.User);
  const user = state.isAuth;
  const role = user?.data?.role;
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeScrn />} />
        <Route path="/authenctication/registeration" element={<RegistrationScreens />} />
        <Route path="/*" element={<Page404 />} />
        <Route path="/checkout/:cName" element={<CartBasket />} />
        <Route path="/all-products" element={<AllProducts />} />
        <Route path="/private" element={<Private />} />

        <Route path="/dashboard/" element={<CheckRole />}>
          <Route path="purchaser" element={<DashboardP />} />
          <Route path="vendor/" element={<DashboardV />}>
          </Route>
        </Route>

        <Route path="/profile/" element={<PrivateRoute />} >
          <Route path="authorized" element={<ManageAccount />} />
        </Route>

        {role === 'seller' && (
          <>
            <Route path="/dashboard/vendor/add-new-product" element={<NewProducts />} />
            <Route path="/dashboard/vendor/update-product/:productId" element={<EditProduct />} />
          </>
        )}
      </Routes>

    </>
  )
}

export default App
