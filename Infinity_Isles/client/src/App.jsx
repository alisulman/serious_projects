import HomeScrn from "./screens/HomeScrn"
import Page404 from "./screens/pages/404Page"
import { Routes, Route } from 'react-router-dom'
import Signup from "./screens/pages/authentication/Signup"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomeScrn />} />
        <Route path="/authentication/signup" element={<Signup />} />
        <Route path="/*" element={<Page404 />} />
      </Routes>
    </>
  )
}

export default App
