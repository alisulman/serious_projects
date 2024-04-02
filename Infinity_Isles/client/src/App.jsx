import HomeScrn from "./screens/HomeScrn"
import Page404 from "./screens/pages/404Page"
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomeScrn />} />
        <Route path="/*" element={<Page404 />} />
      </Routes>
    </>
  )
}

export default App
