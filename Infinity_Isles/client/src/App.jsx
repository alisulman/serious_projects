import HomeScrn from "./screens/HomeScrn"
import Page404 from "./screens/pages/404Page"
import { Routes, Route } from 'react-router-dom'
import ProductScreen from "./screens/layout/productScreen"
import RegistrationScreens from "./screens/pages/Registration"
import DashboardScreeen from "./screens/pages/Dashboard"
import PrivateRoute from "./components/router/privateRoute"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomeScrn />} />
        <Route path="/products" element={<ProductScreen />} />
        <Route path="/pre-authentication" element={<RegistrationScreens />} />
        <Route path="/*" element={<Page404 />} />
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="" element={<DashboardScreeen />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
