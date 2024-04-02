import HomeScrn from "./screens/HomeScrn"
import Page404 from "./screens/pages/404Page"
import { Routes, Route } from 'react-router-dom'
import Signup from "./screens/pages/authentication/Signup"
import Login from "./screens/pages/authentication/login"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomeScrn />} />
        <Route path="/authentication/signup" element={<Signup />} />
        <Route path="/authentication/login" element={<Login />} />
        <Route path="/*" element={<Page404 />} />
      </Routes>
    </>
  )
}

export default App
