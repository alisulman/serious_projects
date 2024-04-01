import Navbar from "./components/Navbar"
import Page404 from "./screens/pages/404Page"
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element='' />
        <Route path="/*" element={<Page404 />} />
      </Routes>
    </>
  )
}

export default App
